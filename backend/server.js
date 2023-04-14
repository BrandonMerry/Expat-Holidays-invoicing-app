// entry point for sever
const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('api works')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(5000, console.log('is running on 5k'))
