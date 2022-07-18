const express = require('express')
const  dotenv = require('dotenv').config
const PORT = process.env.PORT || 4000 

const app = express()


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.status(200).send('Hello World')
  // verified on postman that this route is successful!
})


// Routes
app.use('/api/users', require('./routes/userRoutes'))



// WILDCARD ROUTE
// app.get('*', (req, res) => {
//   res.render('error404')
// })



app.listen(PORT, () => console.log(`Backend Server Running on port ${PORT}! ✨😁✨`))