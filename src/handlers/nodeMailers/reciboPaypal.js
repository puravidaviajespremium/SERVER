const transporter = require("../../../config/nodemailer");

const reciboPaypal = async (req, res) => {
  const { gmail, name, id, value } = req.body;

  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Mensaje enviado de Pura Vida Viajes",
    html: `
        <h1>${name}</h1>
  
        <h2>ID Pgo: ${id}</h2>
    
        <p style='color: red' >Hemos recibido su pago de USD ${value} para contratar un experto para personalizar su viaje.</p> <br/>
    
        <p> El mismo, se pondra en contacto a la brevedad con usted.</p>
    
       <a href="puravidaviajespremium.com">Ingrese a la pagina</a>
        `,
  });
  res.send("Email enviado con exito.-");
};

module.exports = reciboPaypal;
