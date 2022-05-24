module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define(
    "item",
    {
      itemID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      itemName: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Item;
};
