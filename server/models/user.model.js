module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    businessId: {
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM("Bachelor", "Married", "divorcee"),
    },
    numberOfChildren: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    businessId: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};

const BankAccount = {
  HAPOALIM: "hapoalim",
  DISCOUNT: "discount",
  LEUMI: "leumi",
};
