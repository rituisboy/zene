const express = require("express");
const {allSongs} = require('../controller/control')
const router = express.Router();

router.route('/').get(allSongs)


module.exports = router
