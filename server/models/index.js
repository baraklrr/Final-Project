const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

dbConnect();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.refreshToken = require("./refreshToken.model.js")(sequelize, Sequelize);
db.item = require("../models/item.model.js")(sequelize, Sequelize);
db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.expense = require("./expense.model.js")(sequelize, Sequelize);
db.income = require("./income.model.js")(sequelize, Sequelize);
//db.receipt = require("./receipt.model.js")(sequelize, Sequelize);
db.business = require("./business.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.refreshToken.belongsTo(db.user, {
  foreignKey: "userId",
  targetKey: "id",
});
db.user.hasOne(db.refreshToken, {
  foreignKey: "userId",
  targetKey: "id",
});
//db.income.belongsTo(db.receipt);
/*db.item.belongsToMany(db.receipt, {
  through: "receipt_items",
  foreignKey: "itemId",
  otherKey: "receiptId",
});*/
// db.income.hasOne(db.business);
// db.income.hasOne(db.receipt);
// db.income.hasOne(db.customer);
//db.receipt.hasMany(db.item);
//db.item.belongsToMany(db.receipt);

const initial = async () => {
  await db.role.create({
    name: "user",
  });
  await db.role.create({
    name: "moderator",
  });
  await db.role.create({
    name: "admin",
  });
  await db.item.create({
    itemName: "a",
    price: 12,
  });
  await db.item.create({
    itemName: "b",
    price: 13,
  });
  await db.item.create({
    itemName: "c",
    price: 14,
  });
};

db.ROLES = ["user", "admin", "moderator"];

module.exports = { db, initial };
