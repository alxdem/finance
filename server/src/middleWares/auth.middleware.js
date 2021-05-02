const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

module.exports = function (req, res, next) {
  if(req.method === 'OPTIONS') {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
      return res.status(403).json({message: 'Пользователь не зарегистрирован'});
    }
    const decodedData = jwt.verify(token, jwtSecret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({message: 'Пользователь не зарегистрирован'});
  }
};