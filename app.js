const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = 4002;

const { Music } = require("./models/music");
const music = require("./routes/routes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("successfully connected to the cloud database");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req, res) => {
  res.status(200).send("Welcome to RAS Music, a mern stack project");
});

// test
