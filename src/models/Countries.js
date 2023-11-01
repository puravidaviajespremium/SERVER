const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 2,
          max: 50,
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1234),
        allowNull: false,
        validate: {
          min: 20,
          max: 500,
        },
      },
      experiences: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.ENUM,
        values: ["America", "Africa", "Oceania", "Asia", "Europa"],
        allowNull: false,
      },
    },
    { timestamps: false },
    { paranoid: true }
  );
};
