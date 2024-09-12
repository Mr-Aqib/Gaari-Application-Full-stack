// Require express
const express = require('express')
const errorHandler = require('./middlewares/errorMiddleWare.js')
const connectDB = require('./config/connection.js')
const app = express()
// Require color for use
require('colors')
// Require .env
require('dotenv').config()
// Connect with DB
connectDB()
// We have convert data coming from frontend(string into JSON)
app.use(express.json())
app.use(express.urlencoded({urlencoded:false}))
// Making api for use
app.use('/api/users', require('./routes/userRoute.js'))
// Error handling
app.use(errorHandler)
app.listen(process.env.PORT,()=>console.log(`Server is running on PORT ${process.env.PORT.red}`))