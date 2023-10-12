const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Client",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      telephone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        }
      },
      comment: {
        type: DataTypes.STRING,
        validate: {
          min: 20,
          max: 200,
        }
      },
      membershipStatus: {
        type: DataTypes.ENUM, 
        values: ["Plata", "Dorado", "Diamante"],
        allowNull: false,
        defaultValue: "Plata", 
      },
      contactStatus: {
        type: DataTypes.ENUM,
        values: ["Contactado", "En espera", "Ganado", "Perdido"],
        allowNull: false,
        defaultValue: "En espera",
      },
      userType:{
        type: DataTypes.STRING,
        defaultValue: "Cliente",
      }
      //PREFERENCIAS/GUSTOS más adelante.
    },
    { timestamps: false }
  );
};
