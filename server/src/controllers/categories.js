const CategoryModel = require('../models/category');

const getAll = (req, res) => {
  console.log('--------', req.headers.userid);
  CategoryModel.find({userid: req.headers.userid})
    .exec() // Чтобы превратить результат в промис
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
  CategoryModel.create(req.body)
    .then(createdCategory => res.json(req.body))
    .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
  CategoryModel.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
  CategoryModel.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove
};
