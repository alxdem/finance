const OperationModel = require('../models/operation');

const getAll = (req, res) => {
  console.log('--------', req.headers.userid);
  OperationModel.find({userid: req.headers.userid})
    .exec() // Чтобы превратить результат в промис
    .then(operations => res.json(operations))
    .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
  OperationModel.create(req.body)
    .then(createdOperation => res.json(req.body))
    .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
  OperationModel.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then(operation => res.json(operation))
    .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
  OperationModel.deleteOne({ id: req.params.id })
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
