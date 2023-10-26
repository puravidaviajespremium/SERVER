const transporter = require("../../../config/nodemailer.js");
const { Client, User } = require("../../db.js");

const contactoColaborador = async (UserId, ClientId) => {
  const responseUser = await User.findByPk(UserId);

  const gmail = responseUser.dataValues.email;
  const name =
    responseUser.dataValues.firstName + " " + responseUser.dataValues.lastName;

  const responseClient = await Client.findByPk(ClientId);

  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Contacto Asignado",
    html: `
            <h1>${name}</h1>

            <p style='color: red' >Hemos recibido la solicitud de Contacto de Cliente:</p> <br/>

            <p>Nombre: ${responseClient.dataValues.firstName} ${responseClient.dataValues.lastName} </p>
            <p>E-mail: ${responseClient.dataValues.email}</p>
            <p>Telefono: ${responseClient.dataValues.telephone}</p>
            <p>De: ${responseClient.dataValues.countryOrigin}</p>

            <a href="https://www.viajespuravidapremium.com/"><button>Ingresar a la Pagina</button></a>
            `,
  });
};

module.exports = contactoColaborador;
