const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "Destino",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    min: 2,
                    max: 20,
                  }
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
                }
            },

        },
        { timestamps: false }
    );
};
