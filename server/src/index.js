const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.routes');
// const operationRouter = require('./routes/operations');
const config = require('./config/config');
const PORT = process.env.PORT || config.PORT;

require('./models/operation');

const app = express();
app.use(cors());
require('./config/express')(app); // Подключаю и сразу вызываю с передачей app
require('./routes/operations')(app);
require('./routes/categories')(app);
app.use('/auth', authRouter);
mongoose.set('useFindAndModify', false); // Чтобы не выдавало ошибку

mongoose.connect(config.dbURL)
  .then(() => app.listen(
    PORT,
    () => console.log(`Listening server on port ${PORT}...`)))
  .catch(err => console.error('Error connecting to mongo', err))







// app.use(cors());
// app.use(express.json());
// app.use('/auth', authRouter);
// app.use('/api', operationRouter);
//
// const start = async () => {
//   try {
//     await mongoose.connect(config.dbURL);
//     // mongoose.Promise = global.Promise;
//     const db = mongoose.connection;
//     const y = await db;
//     // const u = await y.auth;
//     // console.log('y', y);
//     app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
//   } catch (e) {
//     console.log(e)
//   }
// };
//
// start();

// app.use(morgan('combined'));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(require('./routes/operations'));
//
// mongoose.connect(config.dbURL, config.dbOptions);
//
// mongoose.connection
//   .once('open', () => {
//     console.log(`Mongoose - successful connection ...`);
//     app.listen(PORT,
//       () => {
//         console.log(`Server start on port ${config.PORT} ...`)
//       });
//   })
//   .on('error', error => console.warn(error))