const express = require("express");
const router = express.Router();
const {getAllSongs,
    addSong,
    deleteSong,
    updateSong,
    getSong
} = require('../controller/control')

router.route('/').get(getAllSongs).post(addSong)
router.route( '/:id' ).get(getSong).patch(updateSong).delete(deleteSong);


module.exports = router
