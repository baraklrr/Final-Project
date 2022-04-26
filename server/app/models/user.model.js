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
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.INTEGER
    },
    password: {
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
  });

  return User;
};
