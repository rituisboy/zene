const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: String,
  likes: Number,
  singer: String,
  genre: {
    type: String,
    enum: [
        "Rock",
        "Pop",
        "Hip-hop/Rap",
        "Electronic/Dance",
        "Jazz",
        "Blues",
        "Classical",
        "Country",
        "Reggae",
        "R&B/Soul",
        "Folk",
        "Heavy Metal",
        "Punk",
        "Alternative",
        "Indie",
        "Funk",
        "Gospel",
        "Techno",
        "House",
        "Trance",
        "EDM (Electronic Dance Music)",
        "Disco",
        "Ska",
        "Grime",
        "Dubstep",
        "Ambient",
        "World Music",
        "Latin",
        "K-pop",
        "J-pop",
        "Bollywood",
        "Musical Theater",
        "Opera",
        "Gothic",
        "New Age",
        "Raggae",
        "Soca",
        "Merengue",
        "Cumbia",
        "Bachata"
    ]
  },
});

module.exports = {Music: mongoose.model("Music", musicSchema)}
