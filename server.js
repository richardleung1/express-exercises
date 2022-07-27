const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const responses = require('./models/magic8Ball.js')

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

app.get('/magic/:question', (req, res) => {
    let question = req.params.question.split('%20').join(' ') + '?'
    let response = responses[Math.floor(Math.random() * responses.length)]
    res.send(`<h1>${question}</h1><h1>${response}</h1>`);
});

app.listen(port,() => {
    console.log('listening on port' , port)
})

