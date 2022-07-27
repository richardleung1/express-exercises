const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name + "! It's so great to see you!");
});

app.listen(port,() => {
    console.log('listening on port' , port)
})

