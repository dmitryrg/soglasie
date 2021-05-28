const _ = require('lodash')

function add(dbRows, apiRows) {
  // в db имена firstName в api first_name, привожу все к firstName / сamelCase
  return apiRows
    .map(apiRow => objKeysCamelCase(apiRow))
    .filter(apiRow => !dbRows.find(dbRow => _.isEqual(apiRow, dbRow)))
}

function del(dbRows, apiRows) {
  // в db имена firstName в api first_name, привожу все к firstName / сamelCase
  const _apiRows = apiRows.map(apiRow => objKeysCamelCase(apiRow))
  return dbRows.filter(dbRow => !_apiRows.find(apiRow => _.isEqual(apiRow, dbRow)))
}

function camelCase(snakeCase) {
  return snakeCase
    .split('_')
    .map((elem, index) =>
      index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1).toLowerCase()
    )
    .join('')
}

function objKeysCamelCase(obj) {
  const objKeysCamelCase = {}
  for (const key in obj) {
    objKeysCamelCase[camelCase(key)] = obj[key]
  }
  return objKeysCamelCase
}

module.exports = {
  add,
  del
}
