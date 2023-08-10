const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.json({
    name: 'Anna',
    username: 'anna',
    email: 'anna@gmail.com'
  })
})

app.listen(port, () => console.log('Listening on port ', port))