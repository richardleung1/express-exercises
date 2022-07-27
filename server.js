const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
o

app.listen(port,() => {
    console.log('listening on port' , port)
})

