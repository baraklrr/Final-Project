const { income } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Income = sequelize.define("income", {
    businessId: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    name: {
      type: Sequelize.STRING,
    },
    incomeId: {
      type: Sequelize.INTEGER,
    },
    incomeImg: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    incomeItems: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    incomeSum: {
      type: Sequelize.FLOAT,
    },
    currency: {
      type: Sequelize.ENUM("shekel", "dollar", "euro"),
      defaultValue: "shekel",
    },
    currencyExchangeRate: {
      type: Sequelize.FLOAT,
      defaultValue: 0.0,
    },
    incomeType: {
      type: Sequelize.ENUM(
        "Tax invoice/Receipt",
        "Tax invoice",
        "Receipt",
        "Transaction invoice",
        "Credit invoice"
      ),
    },
    confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Income;
};
