let { User } = require('../../db');
let { Op } = require("sequelize");

const getUsersByName = async (firstName, lastName) => {
    const usersByName = await User.findAll({
        where: {
            [Op.or]: {
                name: {
                    [Op.like]: `%${firstName}%`,
                },
                lastName: {
                    [Op.like]: `%${lastName}%`,
                },
            },
        },
    });

    if (!usersByName || Object.keys(usersByName).length === 0) {
        throw new Error("No existe ningun user con ese nombre o apellido");
    }

    return usersByName;
};

module.exports = getUsersByName;