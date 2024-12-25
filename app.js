const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT_ENV = process.env.PORT || 8080;

app.get('/home/blog', (req, res) => {
  try {
    res.status(200).send('Hello world');
  } catch (error) {
    console.log(error);
  }
});

const DB_URL = process.env.MONGODB_URL;

const connentBDFunc = async () => {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT_ENV, () =>
      console.log(`Listen to -- http://localhost:${PORT_ENV}`)
    );
    console.log('Connect to DB');
  } catch (error) {
    console.log(`Error in connect to DB -- ${error}`);
  }
};
connentBDFunc();

app.post('/api/post', (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    res.send(`My fullName is ${firstName} ${lastName} ${email}`);
  } catch (error) {
    res.send(`Error this is Post req -- ${error}`);
  }
});
