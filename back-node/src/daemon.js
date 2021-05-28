'use strict'
const path = require('path')
const config = require('config')
const superagent = require('superagent')

const User = require(path.join(config.dir.run, 'models/user'))

main()

// setInterval(() => main(), 60 * 1000)

async function main() {
  // await User.sync()

  // todo более оптимальный алгоритм основанный на сравнении записей
  await User.destroy({
    where: {},
    truncate: true
  })

  const res = await superagent.get(config.url)

  for (const user of res.body.data) {
    await User.findOrCreate({
      where: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        avatar: user.avatar
      }
    })
  }
}
