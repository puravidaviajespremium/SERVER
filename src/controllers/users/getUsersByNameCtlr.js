const { off } = require("process");
let { User } = require("../../db");
let { Op } = require("sequelize");

const getUsersByName = async (firstName, lastName, offset, rowsPerPage) => {
  const usersByName = await User.findAndCountAll({
    where: {
      [Op.or]: {
        firstName: {
          [Op.like]: `%${firstName}%`,
        },
        lastName: {
          [Op.like]: `%${lastName}%`,
        },
      },
    },
    offset: offset,
    limit: rowsPerPage
  });

  if (!usersByName || Object.keys(usersByName).length === 0) {
    throw new Error("No existe ningun user con ese nombre o apellido");
  }

  const hasPreviousPage = offset > 0;
  const hasNextPage = usersByName.rows.length === rowsPerPage;

  return {
    users: usersByName.rows,
    total: usersByName.count,
    pageInfo: {
      hasPreviousPage: hasPreviousPage,
      hasNextPage: hasNextPage
    }
  };
};

module.exports = getUsersByName;
