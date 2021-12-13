const categories = require('../controllers/categories');
const authMiddleware = require('../middleWares/auth.middleware');

module.exports = (app) => {
  app.get('/categories', authMiddleware, categories.getAll);
  app.get('/categories/:id', authMiddleware, categories.getById);
  app.post('/categories', authMiddleware, categories.create);
  app.put('/categories/:id', authMiddleware, categories.update);
  app.delete('/categories/:id', authMiddleware, categories.remove);

  app.get('/categories/:name', authMiddleware, categories.getItem);
};