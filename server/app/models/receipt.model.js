module.exports = (sequelize, Sequelize) => {
  const Receipt = sequelize.define("receipts", {
    receiptID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    companyID: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    itemID: {
      type: Sequelize.INTEGER
    },
    sumPrice: {
      type: Sequelize.INTEGER
    },
    paymentMethod: {
      type: Sequelize.STRING
    }
  });

  return Receipt;
};
