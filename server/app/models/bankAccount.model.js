module.exports = (sequelize, Sequelize) => {
  const BankAccount = sequelize.define("bank Accounts", {
    bankID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    numOfBank: {
      type: Sequelize.INTEGER
    },
    numOfBranch: {
      type: Sequelize.INTEGER
    },
    numOfAccount: {
      type: Sequelize.INTEGER
    },
  });

  return BankAccount;
};
