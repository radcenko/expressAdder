// server.js
const express = require('express');
const app = express();

app.get('/add/:number1/:number2', (req, res) => {
  const num1 = parseFloat(req.params.number1);
  const num2 = parseFloat(req.params.number2);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2} = ${sum}`);
  //res.send(`${sum}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});