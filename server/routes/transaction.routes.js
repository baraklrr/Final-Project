module.exports = (app) => {
  const transactionController = require("../controllers/transaction.controller");
  var router = require("express").Router();
  // Retrieve all Transactions
  router.get("/all", transactionController.findAll);
  router.delete("/delete/:id", transactionController.delete);
  app.use("/api/transaction", router);
};
