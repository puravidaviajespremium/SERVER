const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "HistoryClient",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.TEXT,
        validate: {
          min: 20,
          max: 200,
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      originMsg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment: {
        type: DataTypes.INTEGER,
      },
      paymentConcept: {
        type: DataTypes.STRING,
      },
      destiny: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false },
    { paranoid: true }
  );
};
