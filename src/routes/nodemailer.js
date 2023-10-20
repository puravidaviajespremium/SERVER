const { Router } = require("express");
const transporter = require("../../config/nodemailer");

const nodemailerRoute = Router();

nodemailerRoute.post("/", async (req, res) => {
  const { gmail, name } = req.body;

  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Mensaje enviado de Pura Vida Viajes",
    html: `
    <h1>${name}</h1>

    <p style='color: red' >Hemos recibido la solicitud de Contacto.</p> <br/>

    <p> A la brevedad nos pondremos en contacto con ud.</p>

    <button>Ingresar a la Pagina</button>
    `,
  });
  res.send("Email enviado con exito.-");
});

module.exports = nodemailerRoute;
