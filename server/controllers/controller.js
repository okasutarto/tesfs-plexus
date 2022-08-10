const { User, Data, Weapon, Inventory } = require('../models')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY
const bcrypt = require('bcryptjs')
const robohashAvatars = require("robohash-avatars");

class Controller {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.user
      const user = await User.findOne({
        where: {
          id,
        }
      })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async register(req, res) {
    try {
      const { email, username, password, fullName, phone } = req.body

      let avatar = robohashAvatars.generateAvatar({
        username,
        background: robohashAvatars.BackgroundSets.RandomBackground1,
        characters: robohashAvatars.CharacterSets.Kittens,
        height: 200,
        width: 200,
      });

      const user = await User.create({
        email,
        fullName,
        username,
        phone,
        password,
        avatar
      })

      const data = await Data.create({
        UserId: user.id,
        coin: 0,
        xp: 0
      })

      res.status(201).json(user)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async login(req, res) {
    try {
      const user = await User.findOne(
        {
          where:
          {
            email: req.body.email
          }
        })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' })
      }

      const token = jwt.sign({ id: user.id }, secretKey)

      res.status(200).json({
        access_token: token,
        username: user.username,
        avatar: user.avatar,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async updateUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user.id
        }
      })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const { email, username, fullName, avatar, phone } = req.body

      const updated = await User.update(
        {
          email,
          username,
          fullName,
          avatar,
          phone
        },
        {
          where: {
            id: req.user.id,
          },
          returning: true
        })

      res.status(200).json(updated)
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async changePassword(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user.id
        }
      })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const { password } = req.body
      // console.log(password, '<<<< password');
      const changed = await User.update(
        {
          password: bcrypt.hashSync(password, 8)
        },
        {
          where: {
            id: req.user.id,
          },
        })

      res.status(200).json({ message: 'Password changed successfully' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async forgetPassword(req, res) {
    try {
      const { email } = req.body
      const user = await User.findOne({
        where: {
          email,
        }
      })

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const { password } = req.body
      // console.log(password, '<<<< password');
      const changed = await User.update(
        {
          password: bcrypt.hashSync(password, 8)
        },
        {
          where: {
            email: user.email
          },
        })

      res.status(200).json({ message: 'Password changed successfully' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async getData(req, res) {
    try {
      let { page = 1 } = req.query
      let limit = 10;
      let offset = (page - 1) * limit

      const data = await Data.findAndCountAll({
        include:
        {
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password']
          }
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password']
        },
        order: [['xp', 'DESC']],
        limit,
        offset,
      })
      res.json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async getDataById(req, res) {
    try {
      const data = await Data.findOne({
        where: {
          UserId: req.user.id
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password']
        }
      })

      if (!data) {
        return res.status(404).json({ message: 'Data not found' })
      }

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async submitData(req, res) {
    try {
      const { coin, xp } = req.body

      const newData = await Data.update({
        coin,
        xp,
      },
        {
          where: {
            UserId: req.params.id,
          },
          returning: true
        })

      res.status(200).json(newData)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  }

  static async getWeapons(req, res) {
    try {
      const weapons = await Weapon.findAll()
      res.status(200).json(weapons)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async userInventory(req, res) {
    try {
      const { id } = req.user
      const inventory = await Inventory.findAll({
        where: {
          UserId: id
        },
        include: Weapon
      })
      res.status(200).json(inventory)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async buyWeapon(req, res) {
    try {
      const { id } = req.user

      const data = await Data.findOne({
        where: {
          UserId: id
        }
      })
      // console.log(data, '<<<< data');

      const weapon = await Weapon.findByPk(req.params.weaponId)
      // console.log(weapon, '<<<< weapon');

      if (data.coin < weapon.price) {
        return res.status(400).json({ message: 'Not enough coin' })
      }

      const newInventory = await Inventory.create({
        UserId: id,
        WeaponId: req.params.weaponId
      })

      const updateCoin = await Data.update({
        coin: data.coin - weapon.price
      }, {
        where: {
          UserId: id,
        }
      })

      res.status(201).json(newInventory)
    } catch (error) {
      console.log(error, '<<< error buy');
      res.status(500).json({ message: error.message })
    }
  }

  static async sellWeapon(req, res) {
    try {
      const { id } = req.user

      const inventory = await Inventory.findOne({
        where: {
          id: req.params.id,
        }
      })
      console.log(inventory, '<<<< inventory');
      if (!inventory) {
        return res.status(404).json({ message: 'Weapon not found' })
      }

      const data = await Data.findOne({
        where: {
          UserId: id
        }
      })
      console.log(data, '<<<< data');

      const weapon = await Weapon.findByPk(inventory.WeaponId)
      console.log(weapon, '<<<< weapon');

      const updateCoin = await Data.update({
        coin: data.coin + weapon.price
      }, {
        where: {
          UserId: id,
        }
      })

      const deleteInventory = await Inventory.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ message: 'Weapon sold' })
    } catch (error) {
      console.log(error, '<<< error sell');
      res.status(500).json({ message: error.message })
    }
  }
}

module.exports = Controller;