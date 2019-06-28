var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var array = {};

// initialize variables
const port = 3000;
const fs = require('fs');
// middle ware 
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// middle ware

app.get('/red', function(req, res){
  red = req.cookies.red ? parseInt(req.cookies.red) + 1 : 0;
  res.cookie('red', red, {maxAge: 1000 * 60 * 60});
  let reddata = JSON.stringify(res.cookie);
  // array.push(reddata);
  res.send(red+"");
});
app.get('/black', function(req, res){
  black = req.cookies.black ? parseInt(req.cookies.black) + 1 : 0;
  res.cookie('black', black, {maxAge: 1000 * 60 * 60});
  let blackdata = JSON.stringify(res.cookie);
  // array.push(blackdata);
  res.send(black+"");
});
app.get('/white', function(req, res){
  white = req.cookies.white ? parseInt(req.cookies.white) + 1 : 0;
  res.cookie('white', white, {maxAge: 1000 * 60 * 60});
  let whitedata = JSON.stringify(res.cookie);
  // array.push(whitedata);
  res.send(white+"");
});

app.get('/erase', function(req, res){
  let cookie = req.cookies;
  answer = JSON.stringify(cookie);
  console.log(answer);
  fs.writeFileSync('result.json', answer);
  res.end(JSON.stringify(cookie));
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html');
})

app.get('/a', function(req, res){
  res.sendFile(__dirname + '/a.js');
})

app.get('/result', function(req, res){
  res.sendFile(__dirname + '/result.json');
})

app.get('/jquery', function(req, res){  
  res.sendFile(__dirname + '/jquery-3.4.1.min.js');
})

var server = app.listen(port, function(){
 console.log(`The server is started. (listening on port ${port})`);
})