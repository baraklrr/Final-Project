const { db } = require("../models");
const receiptController = require("../controllers/receipt.controller");
const { ModelCtor, Sequelize } = require("sequelize");

const Income = db.income;
const Op = db.Sequelize.Op;

const createIncome = (req, res) => {
  // Validate request
  console.log("***************createIncome******************");
  if (!req.body.description || !req.body.incomeSum) {
    res.status(405).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const businessId = res.locals.userId; //from token
  const saveCustomer = false; //req.body.saveCustomer;
  const customerId = req.body.customerId || null;
  const date = new Date(req.body.date).toISOString(); //req.body.date;
  const description = req.body.description;
  const incomeSum = parseFloat(req.body.incomeSum);
  const incomeType = req.body.incomeType || "";
  const items = JSON.stringify(req.body.items || []);
  const paymentMethods = JSON.stringify(req.body.paymentMethods || []);

  console.log("**********incomeToCreate**********");
  console.log({
    businessId,
    saveCustomer,
    customerId,
    date,
    description,
    items,
    incomeSum,
    paymentMethods,
    incomeType,
  });

  Income.create({
    saveCustomer,
    businessId,
    customerId,
    date,
    description,
    items,
    incomeSum,
    paymentMethods,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("error: " + err);
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
  const businessId = res.locals.userId;
  const incomeId = req.params.incomeId;
  Income.destroy({
    where: {
      [Op.and]: [{ incomeId }, { businessId }],
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "income was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete income with id=${incomeId}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete income with id=" + incomeId,
      });
    });
};

const getAllIncomes = (req, res) => {
  const businessId = res.locals.userId;
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

const getIncomesSum = async (req, res) => {
  const businessId = res.locals.userId;
  Income.findAll({
    attributes: [
      [Sequelize.fn("SUM", Sequelize.col("incomeSum")), "incomeSum"],
    ],
    where: {
      [Op.and]: [{ businessId: businessId }],
    },
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

const getIncomesGroupedByMonths = (req, res) => {
  const userId = res.locals.userId;
  Income.findAll({
    attributes: [
      [Sequelize.fn("SUM", Sequelize.col("incomeSum")), "incomeSum"],
      [Sequelize.fn("DATE_FORMAT", Sequelize.col("date"), "%m-%Y"), "month"],
    ],
    where: {
      [Op.and]: [{ businessId: userId }],
    },
    order: [[Sequelize.literal('"month"'), "ASC"]],
    group: "month",
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

module.exports = {
  getIncomesSum,
  getIncomesGroupedByMonths,
  getIncomesByDate,
  deleteIncomesByDate,
  createIncome,
  getAllIncomes,
  getIncomeById,
  updateIncomeById,
  deleteIncomeById,
  deleteAllIncomes,
};
