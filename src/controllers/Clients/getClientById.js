let { Client } = require("../../db");

let getClientById = async (id) => {

    let clientById = await Client.findOne({
        where: { id }
    });

    if (!clientById) {
        throw new Error("Cliente no encontrado");
    }

    return clientById;

};

module.exports = getClientById;