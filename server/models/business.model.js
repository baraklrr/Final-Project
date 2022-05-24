module.exports = (sequelize, Sequelize) => {
  const Business = sequelize.define(
    "business",
    {
      ownerId: {
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
      bankName: {
        type: Sequelize.ENUM(
          "hapoalim",
          "discount",
          "leumi",
          "mizrahi",
          "yahav"
        ),
      },
      bankBranchNumber: {
        type: Sequelize.INTEGER,
      },
      bankAccountNumber: {
        type: Sequelize.INTEGER,
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
