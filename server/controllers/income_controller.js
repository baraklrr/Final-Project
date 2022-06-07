const { db } = require("../models");
const receiptController = require("../controllers/receipt.controller");
const Income = db.income;
const Op = db.Sequelize.Op;

const createIncome = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(405).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Income.create({
    businessId: req.body.businessId,
    customerId: req.body.customerId,
    date: req.body.date,
    title: req.body.title,
    incomeImg: req.body.incomeImg,
    //itemsList: req.body.receipt,
    incomSum: req.body.incomSum,
    currency: req.body.currency,
    //currencyExchangeRate: req.body.currencyExchangeRate,
    incomeType: req.body.incomeType,
    paymentMethod: req.body.paymentMethod,
    //confirmed: req.body.confirmed,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating Income.",
      });
    });
};

const updateIncomeById = (req, res) => {
  const id = req.params.incomeId;
  Income.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "income was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: "Cannot update income with id=${id}",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating income with id=" + id,
      });
    });
};

// Find a single income with an id
const getIncomeById = (req, res) => {
  const id = req.params.id;

  Income.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving income with id=" + id,
      });
    });
};

const deleteIncomeById = (req, res) => {
  const id = req.params.id;
  Income.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        r;
        es.send({
          message: "income was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete income with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete income with id=" + id,
      });
    });
};

const getAllIncomes = async (req, res) => {
  const businessId = req.params.businessId;
  Income.findAll({
    where: { businessId: businessId },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while retrieving",
      });
    });
};

// Delete all Invoices from the database.
const deleteAllIncomes = (req, res) => {
  const businessId = req.params.businessId;
  Income.destroy({
    where: { businessId: businessId },
  })
    .then((nums) => {
      res.send({ message: `${nums} incomes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all invoices.",
      });
    });
};

const getIncomesByDate = (req, res) => {
  const { startDate, endDate } = req.body;
  Income.findAll({
    where: { date: { [Op.between]: [startDate, endDate] } },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while retrieving",
      });
    });
};

// Delete Invoices by date from the database.
const deleteIncomesByDate = (req, res) => {
  const { startDate, endDate } = req.body;
  Income.destroy({
    where: { date: { [Op.between]: [startDate, endDate] } },
  })
    .then((nums) => {
      res.send({ message: `${nums} incomes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all invoices.",
      });
    });
};

const getIncomes = (req, res) => {
  console.log("total income");
  res.send("total income");
};

module.exports = {
  getIncomesByDate,
  deleteIncomesByDate,
  getIncomes,
  createIncome,
  getAllIncomes,
  getIncomeById,
  updateIncomeById,
  deleteIncomeById,
  deleteAllIncomes,
};
