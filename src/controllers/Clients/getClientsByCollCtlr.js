let { Client, User } = require("../../db.js");
const Sequelize = require("sequelize");

let getClientsByCollCtlr = async (
  UserId,
  membershipStatus,
  contactStatus,
  firstName,
  offset,
  rowsPerPage
) => {
  const filters = {};

  if (firstName) {
    filters.firstName = {
      [Sequelize.Op.like]: `%${firstName}%`,
    };
  }

  if (UserId) {
    filters.UserId = {
      [Sequelize.Op.eq]: UserId,
    };
  }
  // Si se recibe el parámetro membershipStatus, agregarlo al objeto con el operador Op.eq
  if (membershipStatus) {
    filters.membershipStatus = {
      [Sequelize.Op.eq]: membershipStatus,
    };
  }
  // Si se recibe el parámetro contactStatus, agregarlo al objeto con el operador Op.eq
  if (contactStatus) {
    filters.contactStatus = {
      [Sequelize.Op.eq]: contactStatus,
    };
  }

  let clientesByContactStatus = await Client.findAndCountAll({
    where: filters,
    offset: offset,
    limit: rowsPerPage,
    attributes: [
      "id",
      "firstName",
      "lastName",
      "email",
      "telephone",
      "membershipStatus",
      "contactStatus",
      "UserId",
    ],
    include: [
      {
        model: User,
        attributes: ["firstName", "lastName"],
      },
    ],
  });

  if (
    !clientesByContactStatus ||
    Object.keys(clientesByContactStatus).length === 0
  ) {
    throw new Error("No existe ningun cliente por ese status");
  }

  const hasPreviousPage = offset > 0;
  const hasNextPage = clientesByContactStatus.rows.length === rowsPerPage;

  return {
    clients: clientesByContactStatus.rows,
    total: clientesByContactStatus.count,
    pageInfo: {
      hasPreviousPage: hasPreviousPage,
      hasNextPage: hasNextPage,
    },
  };
};

module.exports = getClientsByCollCtlr;
