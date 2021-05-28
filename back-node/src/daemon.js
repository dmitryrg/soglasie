'use strict'
const path = require('path')
const config = require('config')
const superagent = require('superagent')

const User = require(path.join(config.dir.run, 'models/user'))
const sx = require(path.join(config.dir.run, 'db-sync'))

main()

setInterval(() => main(), config.refresh * 60 * 1000)

async function main() {
  // await User.sync()

  const dataApi = (await superagent.get(config.url)).body.data
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
}
