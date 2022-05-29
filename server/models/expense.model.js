module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define(
    "expense",
    {
      businessId: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      name: {
        type: Sequelize.STRING,
      },
      expenseItems: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expenseImg: {
        type: Sequelize.BLOB("long"),
      },
      expenseSum: {
        type: Sequelize.FLOAT,
      },
      currency: {
        type: Sequelize.STRING,
      },
      VatType: {
        type: Sequelize.STRING,
      },
      VatRefund: {
        type: Sequelize.FLOAT,
      },
      IrsRefund: {
        type: Sequelize.FLOAT,
      },
      refundSum: {
        type: Sequelize.FLOAT,
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );

  return Expense;
};
