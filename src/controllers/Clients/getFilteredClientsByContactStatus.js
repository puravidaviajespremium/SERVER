let { Client } = require("../../db")

let getFilteredClientsByContactStatus = async (contactStatus) => {
    let clientesByContactStatus = await Client.findAll({
        where: { contactStatus }
    });
    if (!clientesByContactStatus || Object.keys(clientesByContactStatus).length === 0) {
        throw new Error("No existe ningun cliente por ese status");
    }

    return clientesByContactStatus;
}

module.exports = getFilteredClientsByContactStatus;