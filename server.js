// set up base express app
var express = require('express');
var app = express();
var path = require('path'); 

// set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs');
app.engine('html', ejs.renderFile); 
app.set('view engine', 'html');

// serve public folder as static assets on the root route
var publicPath = path.join(__dirname, 'public');
app.use("/", express.static(publicPath));


// ROUTES ANGULAR HANDLES
// redirect all other paths to index
app.get('/', function(request, response){
  response.render('index');
});

app.get('/templates/:name', function(request, response){
  var name = request.params.name;
  response.render('templates/' + name);
});


// SERVER
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

var server = require('http').createServer(app);
server = server.listen(port);
console.log(process.env.NODE_ENV  + ' server running at port:' + port);

