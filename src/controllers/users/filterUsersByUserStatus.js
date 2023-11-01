let { User } = require('../../db.js')

let getAllUsersByStatus = async (userStatus, offset, rowsPerPage) => {
    let allUsersByStatus = await User.findAndCountAll({
        where: { userStatus: userStatus },
        offset: offset,
        limit: rowsPerPage
    }
    );

    if (allUsersByStatus.length === 0) throw new Error("No hay ningún usuario con el ROL seleccionado!");

    const hasPreviousPage = offset > 0;
    const hasNextPage = allUsersByStatus.rows.length === rowsPerPage;

    return {
        users: allUsersByStatus.rows,
        total: allUsersByStatus.count,
        pageInfo: {
            hasPreviousPage: hasPreviousPage,
            hasNextPage: hasNextPage
        }
    }
}

module.exports = getAllUsersByStatus;