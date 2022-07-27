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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    res.send(`<p>${tip}</p>`);
});

app.listen(port,() => {
    console.log('listening on port' , port)
})

