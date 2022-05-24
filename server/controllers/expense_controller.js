const { db } = require("../models");

const Expense = db.expense;
const Op = db.Sequelize.Op;

// Create and Save a new expense
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // Create expense
  const expense = {
    businessId: req.body.businessId,
    date: req.body.date,
    name: req.body.name,
    expenseItems: req.body.expenseItems,
    expenseImg: req.body.expenseImg,
    expenseSum: req.body.expenseSum,
    currency: req.body.currency,
    VatType: req.body.VatType,
    VatRefund: req.body.VatRefund,
    IrsRefund: req.body.IrsRefund,
    refundSum: req.body.refundSum,
    confirmed: req.body.confirmed,
  };
  // Save expense in the database
  Expense.create(expense)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Invoice.",
      });
    });
};
