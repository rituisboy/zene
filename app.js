const express = require("express");
const cors = require("cors");
const Music = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());


app.use('/',Music)




app.listen(3000, () => {
  console.log("http://localhost:3000");
});
