import express from "express";

const app = express();

app.get('/games', (req, res) => {
  return res.json([])
})

app.post('/ads', (req, res) => {
  return res.json([])
})

app.get('/games/:id/ads', (req, res) => {
  //const gamesId = req.params.id;

  return res.json([
    {id: 1, name: 'anúncio 1'},
    {id: 2, name: 'anúncio 2'},
    {id: 3, name: 'anúncio 3'},
    {id: 4, name: 'anúncio 4'}
  ])
})

app.get('/ads/:id/discord', (req, res) => {
  //const adsId = req.params.id;

  return res.json([])
})


app.listen(3333);