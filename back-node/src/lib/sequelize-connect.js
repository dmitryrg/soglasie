const config = require('config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, config.sequelize)

module.exports = sequelize
