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
      saveCustomer: {
      type: Sequelize.BOOLEAN
      },
      customerId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      },
      date: {
      type: Sequelize.DATEONLY,
      },
      description: {
      type: Sequelize.STRING,
      },
      items: {
      type: Sequelize.STRING
      },
      incomeSum: {
      type: Sequelize.FLOAT,
      },
      // currency: {
      //   type: Sequelize.ENUM("shekel", "dollar", "euro"),
      //   defaultValue: "shekel",
      // },
      // currencyExchangeRate: {
      //   type: Sequelize.FLOAT,
      //   defaultValue: 0.0,
      // },
      incomeType: {
      type: Sequelize.ENUM(
          "Tax invoice/Receipt",
          "Tax invoice",
          "Receipt",
          "Transaction invoice",
          "Credit invoice"
        ),
        defaultValue: "Tax invoice/Receipt"
      },
      paymentMethods: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  );

  return Income;
};
