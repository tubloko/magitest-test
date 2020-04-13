const express = require('express');
const cors = require('cors');

const authRouter = require('./routers/authRouter');
const sendInviteRouter = require('./routers/sendInviteRouter');
const userRouter = require('./routers/userRouter');
const testRouter = require('./routers/testRouter');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);
app.use(sendInviteRouter);
app.use(userRouter);
app.use(testRouter);

module.exports = app;
