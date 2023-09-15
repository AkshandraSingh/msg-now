require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');

const emailRouter = require('./routes/emailRoutes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', emailRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
