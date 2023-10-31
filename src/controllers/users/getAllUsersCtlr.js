let { User } = require('../../db.js')

let getAllUsers = async (offset, rowsPerPage) => {

  if (!offset && !rowsPerPage) {
    let allUsers = await User.findAll();
    if (allUsers.length === 0) {
      throw new Error("No hay ningún usuario en la base de datos!");
    }

    return allUsers;

  } else {
    let allUsers = await User.findAndCountAll({
      offset: offset,
      limit: rowsPerPage
    });

    if (allUsers.length === 0) throw new Error("No hay ningún usuario en la base de datos!");

    const hasPreviousPage = offset > 0;
    const hasNextPage = allUsers.rows.length === rowsPerPage;

    return {
      users: allUsers.rows,
      total: allUsers.count,
      pageInfo: {
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage
      }
    };
  }
}

module.exports = getAllUsers;