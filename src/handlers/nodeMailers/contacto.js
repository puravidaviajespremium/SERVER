const transporter = require("../../../config/nodemailer");

const contacto = async (req, res) => {
  const { gmail, name } = req.body;

  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Mensaje enviado de Pura Vida Viajes",
    html: `
      <h1>${name}</h1>
  
      <p style='color: red' >Hemos recibido la solicitud de Contacto.</p> <br/>
  
      <p> A la brevedad nos pondremos en contacto con ud.</p>
  
      <a href="http://puravidaviajespremium.com"><button>Ingresar a la Pagina</button></a>
      `,
  });

  res.send("Email enviado con exito.");
};
module.exports = contacto;
