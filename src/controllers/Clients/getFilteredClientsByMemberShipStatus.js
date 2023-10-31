let { Client } = require("../../db");

let getFilteredClientsByMemberShipStatus = async (memberShipStatus, offset, rowsPerPage) => {
    let clientes = await Client.findAndCountAll({
        where: { memberShipStatus },
        offset: offset,
        limit: rowsPerPage
    })

    if (!clientes || Object.keys(clientes).length === 0) {
        throw new Error("No existe ningun cliente por ese MemberShip!");
    }

    const hasPreviousPage = offset > 0;
    const hasNextPage = clientes.rows.length === rowsPerPage;

    return {
        clients: clientes.rows,
        total: clientes.count,
        pageInfo: {
            hasPreviousPage: hasPreviousPage,
            hasNextPage: hasNextPage
        }
    };
}

module.exports = getFilteredClientsByMemberShipStatus;