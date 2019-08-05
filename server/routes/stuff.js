const express = require('express')
const fs = require('fs')
const router = express.Router();
const UserController = require('../controllers/users');
const Schedul = require('../models/schedul');

const Auth = require('../middleware/authMiddleware');

router.get('/schedul', (req,res,next)=>{
	Schedul.find({}).then(function (sch) {
        res.json(sch);
    });
});

router.post('/addschedul', (req,res,next)=>{
	var body = req.body;
	console.log(body)
	var schedul = new Schedul({
		from : body.from,
		to : body.to,
		time: body.time,
		busname: body.name
	})
console.log(schedul)
	schedul.save().then(v=>{
		res.json(
			{
				success: 'true',
				schedul: v
			}
		)
	})
});

router.post('/user/login', UserController.login)

module.exports = router