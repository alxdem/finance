const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
  userid: String,
  value: Number,
  description: String
})

const OperationModel = mongoose.model('operations', OperationSchema);
module.exports = OperationModel;