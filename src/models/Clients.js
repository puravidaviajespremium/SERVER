const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Client",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      target: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
