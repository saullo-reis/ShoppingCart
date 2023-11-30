import cookieParser from 'cookie-parser';
import express from 'express';

var app = express();

app.use(express.json());
app.use((cookieParser));

app.use('/', indexRouter);
app.use('/users', usersRouter);


