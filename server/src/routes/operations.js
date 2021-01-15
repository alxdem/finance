const express = require('express');
const router = express.Router();
const Operation = require('../models/operation-model');

router.post('/operations', (req, res) => {
  const operation = new Operation({
    value: req.body.value,
    description: req.body.description
  });

  operation.save((err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Operation with ID_${data._id} saved successfully!`
      })
    }
  })
})

router.get('/operations', (req, res) => {
  Operation.find({}, 'value description', (err, operations) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.send({ operations: operations })
    }
  })
})

router.get('/operations/:id', (req, res) => {
  Operation.findById(req.params.id, 'value description', (err, operation) => {
    if(err) {
      res.status(500)
    } else {
      res.send(operation)
    }
  })
})

module.exports = router;