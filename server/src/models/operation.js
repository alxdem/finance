const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
  id: Number,
  value: Number,
  description: String
})

const OperationModel = mongoose.model('operations', OperationSchema);
module.exports = OperationModel;