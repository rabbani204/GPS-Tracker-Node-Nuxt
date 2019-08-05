const express = require('express')
const fs = require('fs')

const router = express.Router();

let files = fs.readdirSync( __dirname);

files.forEach( fileName => {

    let contName = /.+(?=\.\w?)/.exec(fileName)[0];

    if (fileName !== 'index.js') {
      router.use('/' + contName, require(__dirname + '/' + fileName));
    }
});

module.exports = router