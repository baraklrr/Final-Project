const { db } = require("../models");
const Income = db.income;
const Expense = db.expense;
const Op = db.Sequelize.Op;

// Retrieve all Transactions from the database.
exports.findAll = (req, res) => {
  // Income.findAll()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving invoices.",
  //     });
  //   });

  Expense.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices.",
      });
    });
};
