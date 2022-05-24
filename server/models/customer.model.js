module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
    "customers",
    {
      customerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerName: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Customer;
};
