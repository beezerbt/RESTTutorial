// const express = require('express')
// var http = require('http');
// const app = express()
// app.use(express.json)
// const subscriberRouter = require('./routes/subscribers')
// app.use('/subscribers', subscriberRouter)
// http.createServer(app).listen(8080, ()=> console.log("Jakes server has started boongi boongi!!"));
// httpServer.listen(8080);
// app.listen(80, ()=> 
// console.log("Jakes server has started boongi boongi!!"))

var http = require('http')
  , https = require('https')
  , express = require('express')
  , birds = require('./birds')
  , app = express()
app.use('/birds', birds)

// app.use(express.json)
// var subscriberRouter = require('./routes/subscribers')
// app.use('/', subscriberRouter)
http.createServer(app).listen(80);
// app.get('/', function (req, res) {
//     res.header('Content-type', 'text/html');
//     return res.end('<h1>Hello, Sham World World!</h1>');
// });
// app.get('/ramin', function (req, res) {
//     res.header('Content-type', 'text/html');
//     return res.end('<h1>Hello, Raminjan Kambiz your brother!</h1>');
// });
// app.get('/users/:userId/books/:bookId', function (req, res) {
//   res.send(req.params)
// })




