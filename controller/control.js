const { Music } = require("../models/music");


const getAllSongs = async (req, res) => {
    try {
        const music = await Music.find();
        if (!music) {
            throw new Error('No Music Found');
        }
        res.status(200).json(music);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
};

const addSong = async (req, res) => {
    try {
        if (!req.body.title || !req.body.artist || !req.body.releaseYear) {
            return res.status(400).json({ message: 'Missing fields' });
        }
        const newMusic = {
            title: req.body.title,
            artist: req.body.artist,
            releaseYear: req.body.releaseYear,
            genre: req.body.genre
        };
        const music = await Music.create(newMusic);
        return res.status(200).send(music);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ message: error.message });
    }
};

const getSong = async (req, res) => {
    try {
        const { id } = req.params;
        const music = await Music.findById(id);
        if (!music) {
            throw new Error('No Music Found');
        }
        return res.status(200).json(music);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
};

const deleteSong = async (req, res) => {
    try {
        const { id: musicId } = req.params;
        const music = await Music.findByIdAndDelete(musicId, req.body, { new: true, runValidators: true });
        if (!music) {
            return res.status(404).json({ msg: `No music with id: ${req.params.id} ` });
        }
        return res.status(404).json({ music });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
};

const updateSong = async (req, res) => {
    try {
        const { id: musicId } = req.params;
        const music = await Music.findOneAndUpdate(musicId, req.body, { new: true, runValidators: true });
        if (!music) {
            return res.status(404).json({ msg: `No music with id: ${req.params.id} ` });
        }
        return res.status(404).json({ music });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
};

module.exports = {
    getAllSongs,
    addSong,
    deleteSong,
    updateSong,
    getSong
};
