const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  userid: String,
  name: String,
  type: Boolean, // Расходная или приходная
  isParent: Boolean,
  parent: String,
})

const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;