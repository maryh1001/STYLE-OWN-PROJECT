const express = require('express')
const  dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000 
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()

// Connect to database
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

// WILDCARD ROUTE
// app.get('*', (req, res) => {
//   res.render('error404')
// })


app.get('/', (req, res) => {
  res.status(200).send('Hello World')
  // verified on postman that this route is successful!
})

app.listen(PORT, () => console.log(`Backend Server Running on port ${PORT}! ✨😁✨`))