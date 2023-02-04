const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

//Example endpoint
app.get("/users", (req, res) => {
  let ignore =
    Object.keys(req.query).length === 0 ||
    !Object.keys(req.query).includes("id");
  const id = ignore ? -1 : req.query.id;
  const result = users.filter((e) => e.id === id || ignore);
  res.json(result);
});
