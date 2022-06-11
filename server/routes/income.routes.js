const express = require("express");
const incomeRouter = express.Router();
const IncomeController = require("../controllers/income_controller");
const authJwt = require("../middleware/authJwt");

incomeRouter.post(
  "/create",
  [authJwt.verifyToken],
  IncomeController.createIncome
);
incomeRouter.get(
  "/grouped-by-months",
  [authJwt.verifyToken],
  IncomeController.getIncomesGroupedByMonths
);

incomeRouter.put("/:incomeId", IncomeController.updateIncomeById);
incomeRouter.get("/{incomeId}", IncomeController.getIncomeById);
incomeRouter.delete("/{incomeId}", IncomeController.deleteIncomeById);
incomeRouter.get("/all", IncomeController.getAllIncomes);
incomeRouter.delete("/all", IncomeController.deleteAllIncomes);
incomeRouter.get("/:startDate&endDate", IncomeController.getIncomesByDate);
incomeRouter.delete(
  "/:startDate&endDate",
  IncomeController.deleteIncomesByDate
);
incomeRouter.get("/total", [authJwt.verifyToken], IncomeController.getIncomes);
module.exports = incomeRouter;
