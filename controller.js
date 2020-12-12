exports.index = function (req, res) {
  var target = req.query.target
  if (target) {
    req.io.emit('notif-' + target, {
      body: req.query.body
    })
  }
  res.send('Executed !')
}
