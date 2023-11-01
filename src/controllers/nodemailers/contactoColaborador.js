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
    <div style="background-color: #172432; padding-top: 2rem; text-align: center;">
                <img src="https://i.postimg.cc/8j4rgQXV/logo-empresa-2.png" alt="logo" style="width: 120px; margin: 2rem 0 3rem;">
                <div style="background-color: #fff; width: 70%; max-width: 350px; margin: 0 auto; padding: 3rem 2rem 0; border-radius: 10px 10px 0 0;">
                  <div style="color: #172432; padding-bottom: 1rem; font-size:1rem">
                    Hola, 
                    <h2 style="font-size: 1.7rem; margin: 0.5rem 0 1rem"> ${name}</h2>
                  </div>
                  <hr style="margin: 0; border-top: 0; border-bottom: 1px solid #ebebeb;">
                </div>
              </div>
              <div style="background-color: #f9f7ee; padding-bottom: 4rem;">
                <div style="background-color: #fff; width: 70%; max-width: 350px; margin: 0 auto; padding: 1rem 2rem 3rem; border-radius: 0 0 10px 10px; text-align: center; color: #000;">
                  <p style="text-align: left;">Hemos recibido la solicitud de Contacto de Cliente: </p>
                  <div style="margin-top:2rem; text-align: left; color: #686871; font-weight: bold;">
                    <p>Nombre: <span style="font-weight: initial; margin-left:0.5rem;">${responseClient.dataValues.firstName} ${responseClient.dataValues.lastName}<span> </p>
                    <p>E-mail: <span style="font-weight: initial; margin-left:0.5rem;">${responseClient.dataValues.email}<span> </p>
                    <p>Telefono: <span style="font-weight: initial; margin-left:0.5rem;">${responseClient.dataValues.telephone}<span> </p>
                    <p>De: <span style="font-weight: initial; margin-left:0.5rem;">${responseClient.dataValues.countryOrigin}<span> </p>
                  </div>
                  <a href="https://www.viajespuravidapremium.com/" target="_blank"><button style="margin-top: 1.5rem;
                  border-radius: 5px;
                  cursor: pointer;
                  padding: 1rem;
                  background-color: #F4AE3F;
                  color: #fff;
                  border: 1px solid #F4AE3F;
                  font-size: 0.875rem;">viajespuravidapremium.com</button></a>
                </div>
              </div>
    `,
  });
};

module.exports = contactoColaborador;
