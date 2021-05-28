const path = require('path')
const config = require('config')

const sequelize = require(path.join(config.dir.run, 'lib/sequelize-connect'))

const { STRING } = require('sequelize')

const User = sequelize.define(
  'user',
  {
    email: {
      type: STRING,
      allowNull: false
    },
    firstName: {
      field: 'first_name',
      type: STRING,
      allowNull: false
    },
    lastName: {
      // входит в состав ключа
      field: 'last_name',
      type: STRING,
      allowNull: false
    },
    avatar: {
      type: STRING,
      allowNull: true
    }
  },
  {
    underscored: true
  }
)

module.exports = User
