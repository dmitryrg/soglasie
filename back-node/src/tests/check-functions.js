const path = require('path')
process.env.NODE_CONFIG_DIR = path.join(path.dirname(__dirname), 'config')
const config = require('config')
const fs = require('fs')

const sx = require(path.join(config.dir.run, 'db-sync'))

describe('DB sync API / add to DB from API', () => {
  test('same', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-same.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.add(dataDb, dataApi)

    // console.log('res same ->', res) // debug

    expect(res).toHaveLength(0)
  })

  test('add', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-add.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.add(dataDb, dataApi)

    // console.log('res add ->', res) // debug

    expect(res).toHaveLength(1)
    expect(res).toEqual([
      {
        id: 7,
        email: 'ivanov.ivan@reqres.in',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        avatar: 'https://reqres.in/img/faces/6-image.jpg'
      }
    ])
  })

  test('del', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-del.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.add(dataDb, dataApi)

    // console.log('res dell ->', res) // debug

    expect(res).toHaveLength(0)
  })

  test('update', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-update.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.add(dataDb, dataApi)

    // console.log('res update ->', res) // debug

    expect(res).toHaveLength(1)
    expect(res).toEqual([
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        firstName: 'Fedor',
        lastName: 'Sumkin',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      }
    ])
  })
})

describe('DB sync API / del from DB not in API', () => {
  test('same', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-same.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.del(dataDb, dataApi)

    // console.log('res same ->', res) // debug

    expect(res).toHaveLength(0)
  })

  test('add', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-add.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.del(dataDb, dataApi)

    // console.log('res add ->', res) // debug

    expect(res).toHaveLength(0)
  })

  test('del', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-del.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.del(dataDb, dataApi)

    // console.log('res dell ->', res) // debug

    expect(res).toHaveLength(1)
    expect(res).toEqual([
      {
        id: 3,
        email: 'emma.wong@reqres.in',
        firstName: 'Emma',
        lastName: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg'
      }
    ])
  })

  test('update', () => {
    const dataApi = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-update.json'), {
        encoding: 'utf-8'
      })
    )
    const dataDb = JSON.parse(
      fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db.json'), {
        encoding: 'utf-8'
      })
    )
    const res = sx.del(dataDb, dataApi)

    // console.log('res update ->', res) // debug

    expect(res).toHaveLength(1)
    expect(res).toEqual([
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        firstName: 'George',
        lastName: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      }
    ])
  })
})
