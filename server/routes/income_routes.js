const express = require("express");
const incomeRouter = express.Router();
const IncomeController = require("../controllers/income_controller");

/**
 * @swagger
 * tags:
 *   name: incomes
 *   description: The incomes of the user
 */



incomeRouter.get("/total", IncomeController.getIncomes);

module.exports = incomeRouter;
