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
        allowNull: false,
        validate: {
          min: 2,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   is: /^\d{10}$/,
        // },
      },
      comment: {
        type: DataTypes.STRING,
        validate: {
          min: 20,
          max: 200,
        },
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
      //PREFERENCIAS/GUSTOS más adelante.
    },
    { timestamps: false },
    { paranoid: true }
  );
};
