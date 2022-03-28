const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes')

app.use('/',indexRouter)

app.listen(port, () => {
    console.log('server is running on port '+ port)
})
