const express = require("express");
const indexRouter = express.Router();
const receiptController = require("../controllers/receipt.controller");

indexRouter.get("/", receiptController.createReceipt);
// (req, res) => {
//   res.send("Hello123");
// });

module.exports = indexRouter;
