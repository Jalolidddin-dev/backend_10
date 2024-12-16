const express = require('express');
const dotenv = require('dotenv');

app.use(dotenv);

const app = express();

const PORT = 8080;

app.get('/home/blog', (req, res) => {
  try {
    res.status(500).send('Hello world');
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log(`Listen to -- http://localhost:${PORT}`));
