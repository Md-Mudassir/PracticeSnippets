let mongoose = require("mongoose");

// const server = "cluster0-shard-00-00-pv37l.mongodb.net:27017";
// const database = "QuizDB";
// const user = "m001-student";
// const password = "m001-mongodb-basics";

mongoose.connect(
  "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-pv37l.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

let customerSchema = new mongoose.Schema({
  name: String,
  email: String
});
module.exports = mongoose.model("Customer", customerSchema);
