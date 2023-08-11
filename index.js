const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.json([
    {
      name: 'Anna',
      username: 'anna',
      email: 'anna@gmail.com'
    },
    {
      name: 'Alice',
      username: 'ali',
      email: 'alice@gmail.com'
    },
    {
      name: 'Jake',
      username: 'jake',
      email: 'jake@outlook.com'
    },
    {
      name: 'Hector',
      username: 'hector',
      email: 'hector@yahoo.com'
    },
    {
      name: 'Maria',
      username: 'mari',
      email: 'maria@gmail.com'
    },
    {
      name: 'Robert',
      username: 'robe',
      email: 'robert@hotmail.com'
    }
  ])
})

app.listen(port, () => console.log('Listening on port ', port))

//Docker build image example:
//docker build --tag user-api-demo:1.0.0 .

//Docker run dockerfile example:
//docker run --name user-api -d -p 3000:5000 user-api-demo:1.0.0
//the public port is 3000 and the port where the express server is listening is 5000

//Pull docker image from:
//docker pull alexdkr/user-api-nodejs