const jwt = require('jsonwebtoken');
const Permission = require('../models/permission');
module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, "ajlkhfkuthernqlfkvieo213109284312094j12!3240214");
        req.userdata = decoded;
        next();
    } catch (error) {
        return res.status(404).json({
            message: "Auth Failed",
            success:false,
        })
	}
} 