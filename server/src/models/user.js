const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  operations: [{
    type: Array,
  }],
  // operations: [{
  //   type: Types.ObjectId,
  //   ref: 'Operations'
  // }]
})

module.exports = model('users', UserSchema);