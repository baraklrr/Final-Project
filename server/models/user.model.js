module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    businessName: {
      type: Sequelize.STRING,
    },
    businesslogoImg: {
      type: Sequelize.BLOB("long"),
      defaultValue: null,
    },
    businessAddress: {
      type: Sequelize.STRING,
    },
    businessPhoneNumber: {
      type: Sequelize.STRING,
    },
    businessType: {
      type: Sequelize.ENUM("Exempt dealer", "Authorized dealer"),
      defaultValue: "Exempt dealer",
    },
  },
  {
    timestamps: false,
  }
  );

  return User;
};
