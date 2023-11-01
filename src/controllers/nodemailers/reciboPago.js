const transporter = require("../../../config/nodemailer");

const reciboPago = async (name, gmail, id, value) => {
  await transporter.sendMail({
    from: "puravidaviajespremium@gmail.com",
    to: gmail,
    subject: "Mensaje enviado de Pura Vida Viajes",
    html: `
    <div style="background-color: #172432; padding-top: 2rem; text-align: center;">
                <img src="https://i.postimg.cc/8j4rgQXV/logo-empresa-2.png" alt="logo" style="width: 120px; margin: 2rem 0 3rem;">
                <div style="background-color: #fff; width: 70%; max-width: 400px; margin: 0 auto; padding: 3rem 2rem 0; border-radius: 10px 10px 0 0;">
                  <div style="color: #172432; font-size:1rem">
                    Hola, 
                    <h2 style="font-size: 1.7rem; margin: 0.5rem 0 1rem"> ${name}</h2>
                  </div>
                  <h3 style="color: #686871; font-weight: bold;">ID pago: <span style="font-weight: initial; margin-left:0.5rem;">${id}</span></h3>
                  <hr style="margin: 0; border-top: 0; border-bottom: 1px solid #ebebeb;">
                </div>
              </div>
              <div style="background-color: #f9f7ee; padding-bottom: 4rem;">
                <div style="background-color: #fff; width: 70%; max-width: 400px; margin: 0 auto; padding: 1rem 2rem 3rem; border-radius: 0 0 10px 10px; text-align: center; color: #000;">
                  <p>Hemos recibido su pago de USD ${value} para contratar un experto y personalizar su próxima aventura.</p>
                  <p style="margin-top:3rem; color: #686871;">El mismo, se pondra en contacto a la brevedad con usted.</p>
                  <a href="https://www.viajespuravidapremium.com/" target="_blank"><button style="margin-top: 1rem;
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

module.exports = reciboPago;
