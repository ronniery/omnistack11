const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const ongsRouter = require('./routes/ongs');
const incidentsRouter = require('./routes/incidents');
const profilesRouter = require('./routes/profiles');
const sessionsRouter = require('./routes/sessions');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ongs', ongsRouter);
app.use('/incidents', incidentsRouter);
app.use('/profiles', profilesRouter);
app.use('/sessions', sessionsRouter);

module.exports = app;
