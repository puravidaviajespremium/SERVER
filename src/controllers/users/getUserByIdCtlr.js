const { User, Client } = require("../../db.js");

const getUserByIdCtlr = async (id) => {
    const usersById = await User.findOne({
        where: { id },
        include: Client,
    });

    if (!usersById) {
        throw new Error("Usuario no encontrado");
    }

    return usersById;
};

module.exports = getUserByIdCtlr;