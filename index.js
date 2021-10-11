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
  , app = express();
http.createServer(app).listen(80);
//   app.get('/', function (req, res) {
//     res.header('Content-type', 'text/html');
//     return res.end('<h1>Hello, Shot World World!</h1>');
// });


