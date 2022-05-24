module.exports = (sequelize, Sequelize) => {
  const Income = sequelize.define(
    "income",
    {
      incomeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      businessId: {
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      title: {
        type: Sequelize.STRING,
      },
      incomeImg: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      /*receiptId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },*/
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
      paymentMethod: {
        type: Sequelize.ENUM("Cash", "Credit", "Bank transfer", "Check"),
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Income;
};
