const { item } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    itemID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    itemName: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });

  return Item;
};
