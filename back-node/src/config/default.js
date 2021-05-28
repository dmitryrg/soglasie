const path = require('path')
const root = path.dirname(path.dirname(__dirname))

module.exports = {
  dir: {
    root,
    run: path.join(root, 'src')
  },
  url: 'https://reqres.in/api/users'
}
