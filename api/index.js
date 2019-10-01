const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 9000;

const app = express();

app.listen(PORT, () => console.log(`server started at  ${PORT}`));

app.use("/api/members", require("./routes/apis/members"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(express.static(path.join(__dirname, "public")));
