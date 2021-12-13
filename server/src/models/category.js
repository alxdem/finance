const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  userid: String,
  name: String,
  type: Boolean, // Расходная (false) или приходная (true)
  parent: String,
  children: Array
});

const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;