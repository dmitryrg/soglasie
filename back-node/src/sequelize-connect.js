const Sequelize = require('sequelize')

const sequelize = new Sequelize('soglasie_db', 'sogladmin', '123', {
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
})

module.exports = sequelize
