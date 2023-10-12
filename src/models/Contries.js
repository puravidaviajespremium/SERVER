const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      actividades: {
        type: DataTypes.ARRAY,
        allowNull: false,
      },
      continente: {
        type: DataTypes.STRING,
      },
      destinosMasVisitados: {
        type: DataTypes.ARRAY,
      },
    },
    { timestamps: false }
  );
};
