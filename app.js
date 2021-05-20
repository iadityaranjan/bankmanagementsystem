var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var xhbs = require('express-handlebars');
var Handlebars = require('handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sendmoneyRouter = require('./routes/sendmoney');
const db = require('./config/database');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

db.authenticate()
  .then(()=> console.log('Database Connected...'))
  .catch(error => console.log('Error'+error))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', xhbs({
  defaultLayout: 'main',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/transaction', sendmoneyRouter);

module.exports = app;
