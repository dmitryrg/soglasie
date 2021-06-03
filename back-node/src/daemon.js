'use strict'
const path = require('path')
const config = require('config')
const superagent = require('superagent')

const User = require(path.join(config.dir.run, 'models/user'))
const sx = require(path.join(config.dir.run, 'db-sync'))

main()

setInterval(() => main(), config.refresh * 60 * 1000)

async function main() {
  // await User.sync({force:true})
  console.log('daemon run ->')

  try {
    let dataApi = []
    for (let i = 1; true; i++) {
      const chunkApi = (await superagent.get(`${config.url}?page=${i}`)).body.data
      if (chunkApi.length === 0) {
        break
      }
      dataApi = dataApi.concat(chunkApi)
    }

    const dataDb = (await User.findAll()).map(user => user.dataValues)

    const addRows = sx.add(dataDb, dataApi)
    const delRows = sx.del(dataDb, dataApi)

    for (const user of delRows) {
      await User.destroy({
        where: user
      })
    }

    for (const user of addRows) {
      await User.findOrCreate({
        where: user
      })
    }
  } catch (err) {
    console.log('err ->', err) // debug
  }
}
