const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
require("dotenv/config")

app.get('/', (req, res) => res.send('Hello World!'))

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("conneceeeted to DB!"))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))