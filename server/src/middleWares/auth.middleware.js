const jwt = require('jsonwebtoken');
const { secret } = require('../config/config').jwt;

module.exports = function (req, res, next) {
  const authHeader = req.get('Authorization');
  if(!authHeader) {
    res.status(401).json({ message: 'Токен не получен' });
    return;
  }

  const token = req.headers.authorization.split(' ')[1];
  try {
    const payload = jwt.verify(token, secret);
    if(payload.type !== 'access') {
      res.status(401).json({message: 'Неверный токен'});
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: 'Токен истек' });
      return;
    }
    if(e instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: 'Неверный токен' });
      return;
    }
  }

  next();
};