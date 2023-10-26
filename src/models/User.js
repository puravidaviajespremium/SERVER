const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
        validate: {
          is: /^\d{9,18}$/,
        },
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Inicialmente, los usuarios NO estarán bloqueados
      },
      userStatus: {
        type: DataTypes.ENUM,
        values: ["Colaborador", "Administrador"],
        allowNull: false,
        defaultValue: "Colaborador",
      },
    },
    { timestamps: false },
    { paranoid: true } // Activa el modo paranoid para eliminaciones lógicas
  );
};
