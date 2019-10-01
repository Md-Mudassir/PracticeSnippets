const express = require("express");
const router = express.Router();

router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`<h3>you requested a person</h3> ${req.query.name}`);
  } else {
    res.send(`<h3>you requested a person</h3>`);
  }
});

router.get("/person/:name", (req, res) => {
  res.send(`<h3>you requested a person</h3> ${req.params.name}`);
});

router.get("/error", (req, res) => {
  throw new Error("this is forced error");
});
module.exports = router;
