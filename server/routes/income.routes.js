const express = require("express");
const incomeRouter = express.Router();
const IncomeController = require("../controllers/income_controller");
const authJwt = require("../middleware/authJwt");

/**
 * @swagger
 * tags:
 *   name: Income
 *   description: The Income API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Income:
 *      type: object
 *      required:
 *        - customerId
 *        - date
 *        - title
 *        - incomeImg
 *        - incomeSum
 *        - currency
 *        - incomeType
 *        - paymentMethod
 *      properties:
 *        customerId:
 *          type: int
 *          description: The customer id
 *        date:
 *          type: date
 *          description: The income date
 *        title:
 *          type: string
 *          description: The income title
 *        incomeImg:
 *          type: string
 *          defaultValue: null
 *          description: The income image
 *        incomeSum:
 *          type: float
 *          description: The income sum
 *        currency:
 *          type: enum ("shekel", "dollar", "euro")
 *          defaultValue: "shekel"
 *          description: The income currency
 *        incomeType:
 *          type: enum ("Tax invoice/Receipt","Tax invoice","Receipt","Transaction invoice","Credit invoice")
 *          description: The income type
 *        paymentMethod:
 *          type: enum ("Cash", "Credit", "Bank transfer", "Check")
 *          description: The income payment Method
 *      example:
 *          customerId: 1
 *          date: "2022-01-17"
 *          title: "test"
 *          incomSum: 125.78
 *          currency: "shekel"
 *          incomeType: "Tax invoice"
 *          paymentMethod: "Credit"
 
 */

/**
 * @swagger
 * /api/income/create:
 *   post:
 *     summary: create a new income
 *     tags: [Income]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Income'
 *       responses:
 *         200:
 *           description: return the new income
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Income'
 *         500:
 *           description: error message
 *           content:
 *              "Some error occurred while creating Income."
 *
 */
incomeRouter.post("/create", IncomeController.createIncome);

/**
 * @swagger
 * /api/income/all/buissnessid:
 *   post:
 *     summary: get all incomes by buissnesid
 *     tags: [Income]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Income'
 *       responses:
 *         200:
 *           description: get list of all income by buissness id
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Income'
 */

incomeRouter.get("/all/:businessId", IncomeController.getAllIncomes);

/**
 * @swagger
 * /api/income/update/incomeId:
 *   post:
 *     summary: update incomes by incomeId
 *     tags: [Income]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Income'
 *       responses:
 *         200:
 *           description: update income by id
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Expense'
 */
incomeRouter.get("/update/:incomeId", IncomeController.updateIncomeById);

module.exports = incomeRouter;
