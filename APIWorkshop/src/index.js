const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const personRoute = require("./routes/person");
let path = require("path");
let customerRoute = require("./routes/customer");
let bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));
//404 error
app.use((req, res, next) => {
  res.status(400).send(`You are lost buddy`);
});
//500 error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, "../public/500.html"));
});
app.listen(PORT, () => console.info(`Server started @ ${PORT}`));
