module.exports = (app) => {
    const ExpenseController = require("../controllers/expense_controller");
    const expenseRouter = require("express").Router();

  // Create a new expense
  expenseRouter.post("/", function(req, res){
    ExpenseController.create
  });

//   expenseRouter.get("/total", ExpenseController.getIncomes);

  app.use("/api/expense", expenseRouter);
};
