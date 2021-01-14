const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config/config');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || config.PORT,
  () => {
    console.log(`Server start on port ${config.PORT} ...`)
  });

app.get('/operations', (req, res) => {
  res.send(
    [{
      title: 'Hello bitch!',
      description: 'My description this'
    }]
  )
})