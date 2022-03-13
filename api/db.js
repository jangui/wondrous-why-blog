import mongoose from 'mongoose';

// db options
const user = process.env.API_DB_USER;
const pass = process.env.API_DB_PASSWORD;
const hostname = process.env.MONGO_DB_HOSTNAME
const mongodbPort = process.env.MONGO_DB_PORT
const database = process.env.DATABASE
const options = "retryWrites=true&authSource=admin"
const uri = `mongodb://${user}:${pass}@${hostname}:${mongodbPort}/${database}?${options}`

// connect to database
export const conn = mongoose.createConnection(uri, { useUnifiedTopology: true } );

// set up models
const userSchema = require('./schemas/user.js');
export const User = conn.model("User", userSchema);

const postSchema = require('./schemas/post.js');
export const Post = conn.model("Post", postSchema);
