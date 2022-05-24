const ExpenseController = require("../controllers/expense_controller");
const expenseRouter = require("express").Router();

// Create a new expense
expenseRouter.post("/create", ExpenseController.create);

module.exports = { expenseRouter };
