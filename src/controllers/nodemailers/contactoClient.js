const transporter = require("../../../config/nodemailer");

const contactoClient = async (gmail, name) => {
  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Mensaje enviado de Pura Vida Viajes",
    html: `
          <h1>${name}</h1>
      
          <p style='color: red' >Hemos recibido su solicitud de Contacto.</p> <br/>
      
          <p> A la brevedad nos pondremos en contacto con ud.</p>
      
          <a href="https://www.viajespuravidapremium.com/"><button>Ingresar a la Pagina</button></a>
          `,
  });
};

module.exports = contactoClient;
