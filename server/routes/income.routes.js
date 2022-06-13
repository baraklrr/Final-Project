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
  "/sum",
  [authJwt.verifyToken],
  IncomeController.getIncomesSum
);


incomeRouter.get(
  "/grouped-by-months",
  [authJwt.verifyToken],
  IncomeController.getIncomesGroupedByMonths
);
incomeRouter.get("/all", [authJwt.verifyToken], IncomeController.getAllIncomes);

incomeRouter.put("/:incomeId", IncomeController.updateIncomeById);
incomeRouter.get("/{incomeId}", IncomeController.getIncomeById);
incomeRouter.delete(
  "/all",
  [authJwt.verifyToken],
  IncomeController.deleteAllIncomes
);
incomeRouter.delete(
  "/:incomeId",
  [authJwt.verifyToken],
  IncomeController.deleteIncomeById
);
incomeRouter.get("/:startDate&endDate", IncomeController.getIncomesByDate);
incomeRouter.delete(
  "/:startDate&endDate",
  IncomeController.deleteIncomesByDate
);
//incomeRouter.get("/total", [authJwt.verifyToken], IncomeController.getIncomes);
module.exports = incomeRouter;
