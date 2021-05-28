const _ = require('lodash')

function add(dbRows, apiRows) {
  const addRows = []

  for (const apiRow of apiRows) {
    // apiRow - кандидат на добваление
    // прийдется конвертить названия ключей, так как в db firstName а в api first_name
    const _apiRow = {}
    for (const key in apiRow) {
      _apiRow[camelCase(key)] = apiRow[key]
    }

    let mayAdd = true
    for (const dbRow of dbRows) {
      if (_.isEqual(dbRow, _apiRow)) {
        mayAdd = false
        break
      }
    }

    if (mayAdd) {
      addRows.push(_apiRow)
    }
  }

  return addRows
}

function del(dbRows, apiRows) {
  const delRows = []

  for (const dbRow of dbRows) {
    // dbRow - кандидат на удаление

    let mayDel = true
    for (const apiRow of apiRows) {
      // прийдется конвертить названия ключей, так как в db firstName а в api first_name
      const _apiRow = {}
      for (const key in apiRow) {
        _apiRow[camelCase(key)] = apiRow[key]
      }

      if (_.isEqual(dbRow, _apiRow)) {
        mayDel = false
        break
      }
    }

    if (mayDel) {
      delRows.push(dbRow)
    }
  }

  return delRows
}

function camelCase(snakeCase) {
  return snakeCase
    .split('_')
    .map((elem, index) =>
      index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1).toLowerCase()
    )
    .join('')
}

module.exports = {
  add,
  del
}
