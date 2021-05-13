const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/config').jwt;
const User = require('../models/user');

const login = (req, res) => {
  const { login, password } = req.body;
  User.findOne({ email: login })
    .exec()
    .then((user) => {
      if(!user) {
        res.status(400).json({message: `Пользователь ${login} не найден`});
      }

      const isValid = bcrypt.compareSync(password, user.password);
      if(isValid) {
        const token = jwt.sign(user._id.toString(), secret);
        res.json({ token });
        return token;
      } else {
        res.status(401).json({message: 'Неверный пароль'})
      }
    })
    .catch(err => res.status(500).json({message: err.message}))
};

module.exports = {
  login
};

// class AuthController {
//   async registration(req, res) {
//     try {
//       const errors = validationResult(req);
//       if(!errors.isEmpty()) {
//           return res.status(400).json({message: 'Ошибка при регистрации', errors});
//       }
//
//       const {login, password} = req.body;
//       const candidate = await User.findOne({email: login});
//       if(candidate) {
//         return res.status(400).json({message: 'Email уже зарегистрирован'})
//       }
//
//       const hashPassword = bcrypt.hashSync(password, 7);
//       const user = new User({
//         email: login,
//         password: hashPassword
//       });
//
//       await user.save();
//
//       return res.json({message: 'Пользователь успешно зарегистрирован'});
//
//     } catch (e) {
//       console.log(e);
//       res.status(400).json({ message: 'Registration error' });
//     }
//   }
//
//   async login(req, res) {
//     try {
//       const { login, password } = req.body;
//       const user = await User.findOne({email: login});
//
//       if(!user) {
//         return res.status(400).json({message: `Пользователь ${login} не найден`});
//       }
//       const validPassword = bcrypt.compareSync(password, user.password);
//
//       if(!validPassword) {
//         return res.status(400).json({message: `Введен неверный пароль`});
//       }
//       const token = generateAccessToken(user._id);
//
//       return res.json({token});
//     } catch (e) {
//       console.log(e);
//       res.status(400).json({ message: 'Login error' });
//     }
//   }
//
//   async getUsers(req, res) {
//     try {
//       res.json("server work")
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }

// module.exports = new AuthController();