let { User, Client } = require("../../db.js");
const { Op, fn, col, literal } = require("sequelize");

let getMetricsCtrl = async () => {
  const users = User.findAll({
    where: {
      userStatus: "Colaborador",
    },
    attributes: [
      "id",
      "firstName",
      "lastName",
      "email",
      [fn("COUNT", col("Clients.id")), "clientCount"],
      [
        fn(
          "SUM",
          literal(
            `CASE Clients.contactStatus WHEN 'Prospecto' THEN 1 ELSE 0 END`
          )
        ),
        "prospectCount",
      ],
      [
        fn(
          "SUM",
          literal(
            `CASE Clients.contactStatus WHEN 'Contactado' THEN 1 ELSE 0 END`
          )
        ),
        "contactedCount",
      ],
      [
        fn(
          "SUM",
          literal(
            `CASE Clients.contactStatus WHEN 'En Espera' THEN 1 ELSE 0 END`
          )
        ),
        "waitingCount",
      ],
      [
        fn(
          "SUM",
          literal(`CASE Clients.contactStatus WHEN 'Ganado' THEN 1 ELSE 0 END`)
        ),
        "wonCount",
      ],
      [
        fn(
          "SUM",
          literal(`CASE Clients.contactStatus WHEN 'Perdido' THEN 1 ELSE 0 END`)
        ),
        "lostCount",
      ],
    ],
    include: [
      {
        model: Client,
        attributes: [],
      },
    ],
    group: ["User.id", "User.firstName", "User.lastName", "User.email"],
  });

  if (users.length === 0)
    throw new Error("No hay ningún usuario en la base de datos!");

  return users;
};

module.exports = getMetricsCtrl;
