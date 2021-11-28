const categories = require('../controllers/categories');
const authMiddleware = require('../middleWares/auth.middleware');

module.exports = (app) => {
  app.get('/categories', authMiddleware, categories.getAll);
  app.post('/categories', authMiddleware, categories.create);
  app.put('/categories/:id', authMiddleware, categories.update);
  app.delete('/categories/:id', authMiddleware, categories.remove);
};