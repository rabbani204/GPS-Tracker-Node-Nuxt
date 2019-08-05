const express = require('express')
// const fs = require('fs')
const router = express.Router();

router.get('/', (req, res)=>{
	res.send("Admin route is on the floor")
})

module.exports = router