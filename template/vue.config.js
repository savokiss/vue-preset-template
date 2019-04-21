const pkg = require('./package.json')

process.env.VUE_APP_VERSION = pkg.version

module.exports = {}