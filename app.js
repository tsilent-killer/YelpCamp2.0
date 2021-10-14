const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome back :)');
})

app.listen('3000', () => {
  console.log("Server is listening at http://localhost:3000");
})