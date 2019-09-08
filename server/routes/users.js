const express = require('express')
const fs = require('fs')
const router = express.Router();
const UserController = require('../controllers/users');
const User = require('../models/user');

const Auth = require('../middleware/authMiddleware');

router.get('/', Auth, (req,res,next)=>{
  User.find({}).then(function (users) {
    res.json(users);
    });
});

router.post('/user/login', UserController.login)
router.post('/user/adduser', UserController.adduser)

module.exports = router