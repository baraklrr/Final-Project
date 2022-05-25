module.exports = (sequelize, Sequelize) => {
  const Business = sequelize.define(
    "business",
    {
      businessId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      logoImg: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      businessType: {
        type: Sequelize.ENUM("Exempt dealer", "Authorized dealer"),
      },
    },
    {
      timestamps: false,
    }
  );

  return Business;
};

/*const BankAccount = {
  HAPOALIM: "hapoalim",
  DISCOUNT: "discount",
  LEUMI: "leumi",
};*/
