const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('New message received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    res.status(200).send('Message received successfully!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});