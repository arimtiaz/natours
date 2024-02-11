const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);
console.log(DB)

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});