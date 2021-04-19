const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config/config');
const PORT = process.env.PORT || config.PORT;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/operations'));

mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`);
    app.listen(PORT,
      () => {
        console.log(`Server start on port ${config.PORT} ...`)
      });
  })
  .on('error', error => console.warn(error))