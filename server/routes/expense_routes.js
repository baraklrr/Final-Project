const express = require("express");
const expenseRouter = express.Router();
const expenseController = require("../controllers/expense_controller");
const authJwt = require("../middleware/authJwt");



/**
 * @swagger
 * tags:
 *   name: expenses
 *   description: The expenses of the user
 */


expenseRouter.post("/create",expenseController.create);

expenseRouter.get("/all/:businessId", expenseController.getexpenses);

 module.exports = expenseRouter;