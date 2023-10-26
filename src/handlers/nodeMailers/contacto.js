const transporter = require("../../../config/nodemailer");
const contactoClient = require("../../controllers/nodemailers/contactoClient");

const contacto = (req, res) => {
  const { gmail, name } = req.body;

  contactoClient(gmail, name);

  res.send("Email enviado con exito.");
};
module.exports = contacto;
