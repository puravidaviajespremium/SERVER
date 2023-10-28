let { Client } = require("../../db");

let getFilteredClientsByMemberShipStatus = async (memberShipStatus) => {
    let clientes = await Client.findAll({
        where: { memberShipStatus }
    })

    if (!clientes || Object.keys(clientes).length === 0) {
        throw new Error("No existe ningun cliente por ese MemberShip!");
    }

    return clientes;
}

module.exports = getFilteredClientsByMemberShipStatus;