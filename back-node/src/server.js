'use strict'
const path = require('path')
const config = require('config')

const Koa = require('koa')
const favicon = require('koa-favicon')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('@koa/cors')

const User = require(path.join(config.dir.run, 'models/user'))

const app = new Koa()

app.use(favicon())
app.use(bodyParser({ jsonLimit: '56kb' }))
app.use(cors())

const router = new Router()

router.post('/users', async ctx => {
  console.log('ctx.request.body ->', await ctx.request.body) // debug
  const search = (await ctx.request.body).search

  const filterByFirstName = await User.findAll({ where: { firstName: search } })
  const filterByLastName = await User.findAll({ where: { lastName: search } })

  ctx.response.body = filterByFirstName.concat(filterByLastName)
})

// подцепляем роутер
app.use(router.routes())

// слушаем сервер
app.listen(config.port)
console.log(`Server start on port ${config.port}`) // debug
