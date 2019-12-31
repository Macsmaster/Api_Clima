const getTiempo = require('./get-tiempo');
const express = require('express');
const app = express();
const port = 8080;

// respond with "hello world" when a GET request is made to the homepage
app.get('/tiempo/:lugar', async function (req, res) {
  res.send(await getTiempo.getInfo(req.params.lugar));
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));