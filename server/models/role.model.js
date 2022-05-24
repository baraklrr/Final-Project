module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "role",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Role;
};
