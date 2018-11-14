var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/host', function (req,res){
  res.render('host', {title: 'Hosting a new lobby...'});
})
app.use('/join', function (req,res){
  res.render('join', { title: 'Joining a lobby...' });
})

app.use('/info', function (req,res){
  res.render('info', { title: 'How to play' });
})

app.use('/contact', function (req,res){
  res.render('contact', { title: 'Contact Information' });
})

app.use('/game', function (req,res){
  res.render('game', { title: 'Who is the spy?!!' });
})

/*app.get('/images/:image_name', function(req, res) {
  console.log(path.join(__dirname, 'public/images', req.params.image_name));
  res.sendFile(path.join(__dirname, 'public/images', req.params.image_name));
})**/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
