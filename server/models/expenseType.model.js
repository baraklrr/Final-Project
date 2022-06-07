module.exports = (sequelize, Sequelize) => {
    const expenseType = sequelize.define(
      "expenseType",
      {
        expensetypeId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        vatPercentage :{
            type:Sequelize.FLOAT,
        }
      },
      {
        timestamps: false,
        charset: "utf8",
        collate: "utf8_unicode_ci"
      }
    );
  
    return expenseType;
  };
  