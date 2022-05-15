module.exports = (sequelize, Sequelize) => {
  const BankAccount = sequelize.define("bank Accounts", {
    bankID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    bankNumber: {
      type: Sequelize.INTEGER,
    },
    branchNumber: {
      type: Sequelize.INTEGER,
    },
    accountOwnerName: {
      type: Sequelize.STRING,
    },
    accountNumer: {
      type: Sequelize.INTEGER,
    },
  });

  return BankAccount;
};
