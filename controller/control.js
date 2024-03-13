const { Music } = require("../models/music");
// const mongoose = require('mongoose')
const allSongs = async (req, res) => {
  try {
    const music = await Music.find({});
    if (music) {
      res.json(music);
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
};
const addSong = async (req, res) => {
  try {
    const newMusic = new Music(req.body);
    await newMusic.save()
  } catch (error) {
    console.log(error);
  }
};
const deleteSong = async (req, res) => {
  try {
    const {id}=req.params
    const result = await Music.findByIdAndDelete(id)
    res.send({status:200})
} catch (error) {
    console.log(error);
  }
};
const updateSong = async (req, res) => {
  try {
    const {id}=req.params
    const result = await Music.findByIdAndUpdate(id,req.body)
    res.send({status:200})
} catch (error) {
    console.log(error);
  }
};

module.exports = {
  allSongs,
};
