const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);
// console.log(DB)
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex : true,
  useFindAndModify: false
}).then(con => {
  // console.log(con.connections);
  console.log('DB Connections Successful')
})
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});