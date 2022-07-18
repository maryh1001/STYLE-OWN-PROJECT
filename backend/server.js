const express = require('express')
const  dotenv = require('dotenv').config
const PORT = process.env.PORT || 4000


const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})
// verified on postman that this route is successful!


app.listen(PORT, () => console.log(`Backend Server Running on port ${PORT}! ✨😁✨`))