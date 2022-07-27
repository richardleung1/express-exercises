const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const responses = require('./models/magic8Ball.js')
const fibonacci = require('./models/fibonacci.js')

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name + "! It's so great to see you!")
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    res.send(`<p>${tip}</p>`)
})

app.get('/magic/:question', (req, res) => {
    let question = req.params.question.split('%20').join(' ') + '?'
    let response = responses[Math.floor(Math.random() * responses.length)]
    res.send(`<h1>${question}</h1><h1>${response}</h1>`)
})

app.get('/magic/:question', (req, res) => {
    let question = req.params.question.split('%20').join(' ') + '?'
    let response = responses[Math.floor(Math.random() * responses.length)]
    res.send(`<h1>${question}</h1><h1>${response}</h1>`)
})

app.get('/fibonacci/:number', (req, res) => {
    if (fibonacci(req.params.number)) {
        res.send("<h1>Very good. It is Fibonacci.</h1>")
    } else {
        res.send("<h1>I can tell this is not a fibonacci number.</h1>")
    }
})

app.get('/pass-it-around/:number', (req, res) => {
    let number = parseInt(req.params.number)
    if (number > 0) {
        let link = '/pass-it-around/' + (number - 1 + Math.floor(Math.random() * 2)) 
        res.send(`<h1>${number} little bugs in the code</h1>
        <h1><a href=${link}>Take one down, Patch it around</a></h1>`)
    } else {
        res.send(`<h1>${number} Bottles of beer on the wall</h1>
        <a href='/pass-it-around/99'>"Restart"</a>`)
    }
})

app.listen(port,() => {
    console.log('listening on port' , port)
})

