module.exports = function (app) {
  var ctl = require('./controller')

  app.route('/').get(ctl.index)
}
