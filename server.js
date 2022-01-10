var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');  // added to boilerplate

require('./config/database');  // added to boilerplate

var indexRouter = require('./routes/index');
var flightsRouter = require('./routes/flights');  // edit name and path (users --> flights)
var destinationsRouter = require('./routes/destinations');  // added to boilerplate
var ticketsRouter = require('./routes/tickets');  // added to boilerplate

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('method'));  // added to boilerplate

app.use('/', indexRouter);
app.use('/flights', flightsRouter);  // edit path and name (users --> flights)
app.use('/', destinationsRouter);  // added to boilerplate
app.use('/', ticketsRouter);  // added to boilerplate

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
