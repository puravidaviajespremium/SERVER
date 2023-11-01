const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Client",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        defaultValue: "No asignado",
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: "No asignado",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      telephone: {
        type: DataTypes.STRING,
        defaultValue: "0000000000",
        validate: {
          is: /^\d{9,18}$/,
        },
      },
      countryOrigin: {
        type: DataTypes.STRING,
        defaultValue: "No asignado",
      },
      membershipStatus: {
        type: DataTypes.ENUM,
        values: ["Plata", "Dorado", "Diamante"],
        allowNull: false,
        defaultValue: "Plata",
      },
      contactStatus: {
        type: DataTypes.ENUM,
        values: ["Prospecto", "Contactado", "En espera", "Ganado", "Perdido"],
        allowNull: false,
        defaultValue: "Prospecto",
      },
      userType: {
        type: DataTypes.STRING,
        defaultValue: "Cliente",
      },
    },
    { timestamps: false },
    { paranoid: true }
  );
};
