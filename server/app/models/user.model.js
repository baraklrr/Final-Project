const { user } = require(".");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    userID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    companyUserID: {
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.INTEGER
    },
    password: {
<<<<<<< HEAD
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
    // bankAccount: {
    //   type: Sequelize.ENUM(...Object.values(BankAccount)),
    //   defaultValue: "pending",
    // },
=======
      type: Sequelize.STRING
    },
    numOfChildren: {
      type: Sequelize.INTEGER
    },

      //list of customers

      //status 

      //type of company

      //bank account

      //credit card
>>>>>>> 4367ca71bb844a434bfd92eb8ac8920d29488dba
  });

  return User;
};

const BankAccount = {
  HAPOALIM: "hapoalim",
  DISCOUNT: "discount",
  LEUMI: "leumi",
};
