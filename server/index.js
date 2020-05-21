const express = require('express');

const port = 4000;
const timeout = 2000;

const app = express();
app.use(express.json());

// setTimeout for loading animation
app.post('/signup', (req, res) => {
  const credentials = req.body;
  setTimeout(() => {
    res.json(credentials);
  }, timeout);
});

app.post('/signin', (req, res) => {
  const credentials = req.body;
  setTimeout(() => {
    res.json(credentials);
  }, timeout);
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
