const express = require('express');
const path = require('path');


const app = express();
// console.log(process.env);
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./src/routes/routes'))


app.use(express.static(path.join(`${__dirname}/src/public`)));

module.exports = app;