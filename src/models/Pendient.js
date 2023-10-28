const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pendient",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        validate: {
          min: 20,
          max: 200,
        },
      },
      email: {
        type: DataTypes.STRING,
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
      paymentId: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false },
    { paranoid: true }
  );
};
