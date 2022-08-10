"use strict"

const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication');

router.get('/users', Controller.getUsers);

router.patch('/forgetPassword', Controller.forgetPassword);

router.get('/data', Controller.getData);

router.put('/data/:id', Controller.submitData);

router.get('/weapons', Controller.getWeapons);

router.post('/users/login', Controller.login);

router.post('/users/register', Controller.register);

router.use(authentication);

router.get('/userById', Controller.getUserById);

router.put('/users', Controller.updateUser);

router.patch('/users', Controller.changePassword);

router.get('/user/data', Controller.getDataById);

router.get('/inventory', Controller.userInventory);

router.post('/buy/:weaponId', Controller.buyWeapon);

router.delete('/sell/:id', Controller.sellWeapon);

module.exports = router;