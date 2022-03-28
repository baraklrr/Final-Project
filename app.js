const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const indexRouter = require('./routes')

app.use('/',indexRouter)

app.listen(port, () => {
    console.log('server is running on port '+ port)
})