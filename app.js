var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/product');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Implemento session ANTES DE LAS RUTAS
app.use(session({
  secret: "myapp", //hash para un usuario
  resave: false,
  saveUninitialized: true
}));

//PREGUNTO SI HAY ALGO EN SESSION --> pasamano de info de session a locals
app.use(function(req,res,next){
  if (req.session.user != undefined){ //USER es la propiedad que puse en el controller
    res.locals.user = req.session.user
  }
  return next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);

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
