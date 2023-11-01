let { Client } = require("../../db")

let getFilteredClientsByContactStatus = async (contactStatus, offset, rowsPerPage) => {
    let clientesByContactStatus = await Client.findAndCountAll({
        where: { contactStatus },
        offset: offset,
        limit: rowsPerPage
    });

    if (!clientesByContactStatus || Object.keys(clientesByContactStatus).length === 0) {
        throw new Error("No existe ningun cliente por ese status");
    }

    const hasPreviousPage = offset > 0;
    const hasNextPage = clientesByContactStatus.rows.length === rowsPerPage;

    return {
        clients: clientesByContactStatus.rows,
        total: clientesByContactStatus.count,
        pageInfo: {
            hasPreviousPage: hasPreviousPage,
            hasNextPage: hasNextPage
        }
    };
}

module.exports = getFilteredClientsByContactStatus;