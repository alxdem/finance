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
    type: Types.ObjectId,
    ref: 'Operations'
  }]
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;