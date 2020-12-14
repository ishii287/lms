const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const UserRouter = require('./routes/UserRoute')
const DashboardRouter=require('./routes/DashboardRoute')
const CourseRouter = require('./routes/CourseRoute')

const Database = require('./helpers/database') 

Database.connection()

const app = express()

app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use('/',UserRouter)
app.use('/dashboard',DashboardRouter)
app.use('/', CourseRouter)

module.exports = app