module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    companyID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    companyName: {
      type: Sequelize.STRING,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
  });

  return Customer;
};
