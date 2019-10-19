const express = require("express");
const app = express();
const PORT = process.env.PORT || 3112;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

//parse and display the data
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`server started at  ${PORT}`));

const postRoute = require("./routes/posts");

//when user hits posts url transfer to postRoute
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send(`i'm root`);
});

//db connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("mongodb connected")
);
