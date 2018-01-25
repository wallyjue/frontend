const base = require('./webpack.base.config.js')

let config = Object.assign({}, base, {})

// no need for app entry druing tests
delete config.entry

module.exports = config
