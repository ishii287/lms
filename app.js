const express = require('express')
const UserRouter = require('./routes/UserRoute')

const app = express()

app.set('view engine', 'ejs')

app.use('/',UserRouter)

module.exports = app