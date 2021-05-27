'use strict'
const superagent = require('superagent')
const User = require('./user')

const URL = 'https://reqres.in/api/users'

setTimeout(() => main(), 60 * 1000)

async function main() {
  // await User.sync()

  const res = await superagent.get(URL)

  for (const user of res.body.data) {
    await User.findOrCreate({
      where: {
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        avatar: user.avatar
      }
    })
  }

  /*  await User.findOrCreate({
    where: { email: 'george.bluth@reqres.in' },
    defaults: { firstName: 'Ivan', lastName: 'Ivanov', avatar: '12.12.2012' }
  })*/
}
