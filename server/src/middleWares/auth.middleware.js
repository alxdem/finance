const jwt = require('jsonwebtoken');
const { secret } = require('../config/config').jwt;

module.exports = function (req, res, next) {
  const authHeader = req.get('Authorization');
  if(!authHeader) {
    res.status(401).json({ message: 'Токен не получен' });
  }

  const token = req.headers.authorization.split(' ')[1];
  try {
    jwt.verify(token, secret);
  } catch (e) {
    if(e instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: 'Неверный токен' });
    }
  }

  next();

  // if(req.method === 'OPTIONS') {
  //   next()
  // }
  //
  // try {
  //   const token = req.headers.authorization.split(' ')[1];
  //   if(!token) {
  //     return res.status(403).json({message: 'Пользователь не авторизован'});
  //   }
  //   const decodedData = jwt.verify(token, secret);
  //   req.user = decodedData;
  //   next();
  // } catch (e) {
  //   return res.status(403).json({message: 'Пользователь не авторизован'});
  // }
};