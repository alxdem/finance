const operations = require('../controllers/operations');
const authMiddleware = require('../middleWares/auth.middleware');

module.exports = (app) => {
  app.get('/operations', authMiddleware, operations.getAll);
  app.post('/operations', authMiddleware, operations.create);
  app.put('/operations/:id', authMiddleware, operations.update);
  app.delete('/operations/:id', authMiddleware, operations.remove);
};