const express = require('express');
const path = require('path')
require('dotenv').config()
const port = process.env.PORT;
const mongoose = require('mongoose');
const morgan = require('morgan');
const mainRouter = require('../routes/main.router');
const signRouter = require('../routes/signs.router');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Template Engine Set
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../', 'views'));

// Public File
app.use('/static', express.static(path.join(__dirname, '../', 'public')));


// Server MiddleWare
app.use(express.json());    // Json Parser
app.use(morgan('dev'));     // Log MiddleWare
app.use(cookieParser());    // cookie Parser
app.use(express.urlencoded());  //Url Encoder



// mongo DB Connect Code
mongoose.connect(process.env.MONGOOSE_PATH)
.then(() => {
  console.log('MongoDB Connected')
})
.catch((err) => {
  console.log(err)
})


// Main Page Router
app.use('/', mainRouter)
// Sign Page Router
app.use('/sign', signRouter)



// Server Lister
app.listen(port, () => {
  console.log(`Running on ${port}`)
})
