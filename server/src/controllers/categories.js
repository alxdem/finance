const CategoryModel = require('../models/category');

const getAll = (req, res) => {
  CategoryModel.find({userid: req.headers.userid})
    .exec() // Чтобы превратить результат в промис
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

const getById = (req, res) => {
  CategoryModel.findById({ _id: req.params.id })
    .exec() // Чтобы превратить результат в промис
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
  CategoryModel.create(req.body)
    .then(createdCategory => res.json(createdCategory))
    .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
  CategoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .exec()
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
  CategoryModel.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json(err));
};




const getItem = (req, res) => {
  console.log('*** ', req);
  CategoryModel.find({
    userid: req.headers.userid,
    name: req.body.name
  })
    .exec() // Чтобы превратить результат в промис
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  getItem,
  getById
};
