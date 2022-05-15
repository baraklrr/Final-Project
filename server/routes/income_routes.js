const express = require("express");
const incomeRouter = express.Router();
const IncomeController = require("../controllers/income_controller");

incomeRouter.get("/total", IncomeController.getIncomes);

module.exports = incomeRouter;
