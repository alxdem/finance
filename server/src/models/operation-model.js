const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OperationSchema = new Schema({
  value: {
    type: Number
  },
  description: {
    type: String
  }
})

const OperationModel = mongoose.model('operations', OperationSchema);

module.exports = OperationModel;