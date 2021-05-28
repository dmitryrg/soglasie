const path = require('path')
process.env.NODE_CONFIG_DIR = path.join(path.dirname(__dirname), 'config')
const config = require('config')
const fs = require('fs')

const sx = require(path.join(config.dir.run, 'db-sync'))

describe('DB sync API', () => {
  test('update', async () => {
    const dataApi = fs.readFileSync(path.join(config.dir.run, 'fixtures/users-api-same'),{encoding:'utf-8'})
    const dataDb = fs.readFileSync(path.join(config.dir.run, 'fixtures/users-db'),{encoding:'utf-8'})
    const res = sx.update(dataDb,dataApi)

    // expect(report.number).toEqual('0871600001921000002')
    // expect(report.contact.email).toEqual('ilinskoe_sp@mail.ru')
  })
})
