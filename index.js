const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')

app.get('/', (req, res) => {
    res.send('royal meals server is running!!')
  })

  app.get('/chefs', (req, res) => {
    res.send(chefs);
  })

  app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const selectedChefs = chefs.find(n => parseInt(n.id) === id);
    res.send(selectedChefs);
  })

  app.listen(port, () => {
    console.log(`royal meals is running on port ${port}`)
  })