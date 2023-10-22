const transporter = require("../../../config/nodemailer");
const reciboPago = require("../../controllers/nodemailers/reciboPago");

const reciboPaypal = (req, res) => {
  const { gmail, name, id, value } = req.body;
  try {
    reciboPago(name, gmail, id, value);
    res.send("Email enviado con exito.-");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = reciboPaypal;
