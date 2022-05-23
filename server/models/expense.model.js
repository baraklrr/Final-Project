module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define("expense", {
    businessId: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    type: {
      type: Sequelize.STRING,
    },
    expenseImg: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    expenseSum: {
      type: Sequelize.FLOAT,
    },
    currency: {
      type: Sequelize.STRING,
    },
    VatRefund: {
      type: Sequelize.FLOAT,
    },
    IrsRefund: {
      type: Sequelize.FLOAT,
    },
    //sums refund and vat
    refundSum: {
      type: Sequelize.FLOAT,
    },
    confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Expense;
};
