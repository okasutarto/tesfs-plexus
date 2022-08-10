"use strict";

const jwt = require('jsonwebtoken')
const { User } = require('../models')
const secretKey = process.env.SECRET_KEY

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers

    if (!access_token) {
      throw { name: 'InvalidToken' }
    }

    const payload = jwt.verify(access_token, secretKey)
    const { id } = payload;
    const user = await User.findByPk(id);

    if (!user) {
      throw { name: 'InvalidToken' }
    }

    req.user = {
      id: user.id,
    }

    next();
  } catch (err) {
    next(err)
  }
}

module.exports = authentication;