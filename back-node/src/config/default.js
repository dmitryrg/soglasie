const path = require('path')
const root = path.dirname(path.dirname(__dirname))

module.exports = {
  dir: {
    root,
    run: path.join(root, 'src')
  },
  url: 'https://reqres.in/api/users',
  refresh: 1, // время обновления в минутах
  port: 3002,
  db: { name: 'soglasie_db', user: 'sogladmin', pass: '123' },
  sequelize: {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: false
    },
    // operatorsAliases: false,
    pool: {
      max: 100,
      min: 0,
      idle: 10000
    }
  }
}
