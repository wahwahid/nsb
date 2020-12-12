var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var bodyParser = require('body-parser')
var server = require('http').createServer(app)
var io = require('socket.io')(server)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  req.io = io
  next()
})
io.on('connection', socket => {
  console.log(socket.id)
})

var routes = require('./routes')
const { nextTick } = require('process')
routes(app)

server.listen(port)

console.log('RESTful API server started on: ' + port)
