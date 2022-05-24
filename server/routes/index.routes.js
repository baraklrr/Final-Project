const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("Hello123");
});

module.exports = indexRouter;
