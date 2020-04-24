const express = require('express')
const app = express()
const port = 3001
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require('cors')
require("dotenv/config")

app.use(cors())

app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.on('error', function (error) {
    console.error('mongoose connection error', error);

    process.exit(1);
});

mongoose.connection.on('connected', function () {
    console.info('mongoose connected');
});

mongoose.connection.on('disconnected', function () {
    console.error('mongoose disconnected');

    process.exit(1);
});

app.get('/', (req, res) => res.send('Hello World!'))

const postsRoute = require("./routes/posts")

app.use("/posts", postsRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))