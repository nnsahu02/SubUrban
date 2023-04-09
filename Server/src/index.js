const express = require('express')
const app = express()
const mongoose = require('mongoose')
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
app.use(cors());

const router = require('./Router/routes')


app.use(express.json())
app.use(multer().any());

const url = process.env.DB_URL
mongoose.connect(url)
    .then(() => console.log("MongoDB is connected."))
    .catch(err => console.log(err))

app.use('/', router)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Express app is running on PORT : ${PORT}`)
})