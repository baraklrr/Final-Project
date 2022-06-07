module.exports = (app) => {
  const transactionController = require("../controllers/transaction.controller");
  var router = require("express").Router();
  // Retrieve all Transactions
  router.get("/all", transactionController.findAll);
  app.use("/api/transaction", router);
};
