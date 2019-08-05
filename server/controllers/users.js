const User = require('../models/user');
const Permission = require('../models/permission');
const Route = require('../models/routes');

const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');

exports.adduser = (req, res) => {

bcrypt.hash(req.body.password, 10, (err, hash) => {
	if (err) {
		console.log(err);
		return res.status(500).json({
			error: err,
			message: "Password couldn't be saved"
		})
	} else {
		var user = new User({
			email : req.body.email,
			password: hash
		})
		
		console.log(user, 'u')
		user.save().then(userr=>{
			console.log(userr)
		})
	}
});
}

exports.alluser = (req, res)=>{
	User.find({}).then(result => {
		res.status(201).json({
			message: "Allergies Get Successful",
			data: result,
			count: result.length,
		})
	})
}


exports.allroute = (req, res)=>{
	Route.find({}).then(result => {
		res.status(201).json({
			message: "Allergies Get Successful",
			data: result,
			count: result.length,
		})
	})
}

exports.login = (req, res) => {
	User.findOne({email: req.body.email}).then(user => {
		console.log(user, 'user')
            if (!user) {
                return res.json({
                    message: "Auth Failed",
                    success: false,
                })
            } else {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.json({
                            message: "Auth Failed",
                            success: false,
                        })
                    }
                    if (result) {
                        const jwtTkoen = token.sign({
                            email: user.email,
                            id: user.user_id,
                        }, "ajlkhfkuthernqlfkvieo213109284312094j12!3240214", {
                                expiresIn: "30d",
                            })
                        return res.status(200).json({
                            message: "Auth Successful",
                            token: jwtTkoen,
                            id: user.user_id,
                        })
                    }
                    return res.json({
                        message: "Auth Failed",
                        success: false,
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Login Failed",
                message: err,
            })
        })
}

exports.setpermission = (req, res) => {
    var permission = new Permission({
		routetitle: req.body.routetitle,
		useremail : req.body.useremail,
	})

	permission.save()
}