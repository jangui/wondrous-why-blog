import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import conn from 'db.js';
import authUser from './middlewares/auth.js';

// check env vars set
if (!(
    process.env.API_PORT
    && process.env.API_DB_USER
    && process.env.API_DB_PASSWORD
    && process.env.DATABASE
    && process.env.MONGO_DB_HOSTNAME
    && process.env.MONGO_DB_PORT
    && process.env.JWT_TOKEN_SECRET
    && process.env.JWT_EXPIRATION
    && process.env.BCRYPT_SALT_ROUNDS
    )) {
    console.log('Error: missing env vars');
    process.exit(1);
}

// app setup
const app = express();
const port = process.env.API_PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// check db connection
conn.once('open', () => {
  console.log("Connected to database");
});

// set up routes
import registerRouter from './routes/register.js';
app.use('/register', registerRouter);

import loginRouter from './routes/login.js';
app.use('/login', loginRouter);

import userRouter from './routes/user.js';
app.use('/user', authUser, userRouter);

import postRouter from './routes/post.js';
app.use('/post', postRouter);

// start app
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
