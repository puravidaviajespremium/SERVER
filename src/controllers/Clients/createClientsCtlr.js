const { Client, User, Config, HistoryClient } = require("../../db.js");
const contactoClient = require("../nodemailers/contactoClient.js");
const contactoColaborador = require("../nodemailers/contactoColaborador.js");
let client;
let UserId;

const createClientsCtlr = async (
  firstName,
  lastName,
  email,
  telephone,
  countryOrigin,
  destinationCountry,
  comment
) => {
  client = await Client.findOne({
    where: { email },
  });

  if (!client) {
    const userReg = await User.findOne({ where: { email } });
    if (userReg) throw new Error("Usuario pertenece al Staff");
    console.log(userReg);
  }
  if (!client) {
    const results = await User.findAll({
      where: {
        isBlocked: false,
        userStatus: "Colaborador",
      },
      order: ["id"],
      attributes: ["id", "firstName", "lastName"],
    });

    const users = results.map((u) => u.dataValues);

    UserId = await Config.findByPk(1);

    let userconfig;

    if (!UserId) {
      UserId = users[0].id;

      userconfig = await Config.create({ UserId });
    } else {
      UserId = UserId.dataValues.UserId;

      const usersId = users.map((u) => u.id);

      if (usersId.indexOf(UserId) === users.length - 1) UserId = users[0].id;
      else UserId = users[usersId.indexOf(UserId) + 1].id;

      userconfig = await Config.update(
        {
          UserId,
        },
        { where: { id: 1 } }
      );
    }

    client = await Client.create({
      firstName,
      lastName,
      email,
      telephone,
      countryOrigin,
      UserId,
    });
  }
  const name = firstName + " " + lastName;
  contactoClient(email, name);

  const date = new Date();
  const originMsg = "Formulario";
  const ClientId = client.id;
  const payment = 0;
  const paymentConcept = "";
  const paymentId = "";

  contactoColaborador(UserId, ClientId);

  const history = await HistoryClient.create({
    date,
    comment,
    destinationCountry,
    originMsg,
    payment,
    paymentConcept,
    paymentId,
    ClientId,
  });

  return client;
};

module.exports = createClientsCtlr;
