const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const User = require('../models/user');

const generateAccessToken = (id) => {
  const payload = {
    id
  };

  return jwt.sign(payload, jwtSecret, {expiresIn: '2h'});
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
          return res.status(400).json({message: 'Ошибка при регистрации', errors});
      }

      const {email, password} = req.body;
      const candidate = await User.findOne({email});
      if(candidate) {
        return res.status(400).json({message: 'Email уже зарегистрирован'})
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        email,
        password: hashPassword
      });

      await user.save();

      return res.json({message: 'Пользователь успешно зарегистрирован'});

    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({email});
      if(!user) {
        return res.status(400).json({message: `Пользователь ${email} не найден`});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if(!validPassword) {
        return res.status(400).json({message: `Введен неверный пароль`});
      }
      const token = generateAccessToken(user._id);

      return res.json({token});
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req, res) {
    try {
      res.json("server work")
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AuthController();