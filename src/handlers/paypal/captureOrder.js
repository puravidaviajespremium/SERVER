const axios = require("axios");
const reciboPago = require("../../controllers/nodemailers/reciboPago");
const { Client, HistoryClient, Pendient } = require("../../db.js");
require("dotenv").config();
const { URL_FRONT, CLIENT, SECRET, PAYPAL_API } = process.env;

const captureOrder = async (req, res) => {
  const { token } = req.query;
  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: CLIENT,
          password: SECRET,
        },
      }
    );

    const name = response.data.purchase_units[0].shipping.name.full_name;
    const gmail = "sergiodarioaguilar2017@gmail.com";
    const email = response.data.payment_source.paypal.email_address;
    const paymentId = response.data.id;
    const value =
      response.data.purchase_units[0].payments.captures[0].amount.value;

    reciboPago(name, gmail, paymentId, value);

    const date = new Date();
    const comment = "Pago Recibido";
    const originMsg = "PAYPAL";
    const payment = value;
    const paymentConcept = "Experto";

    const responseClient = await Client.findOne({ where: { email } });

    if (responseClient) {
      const ClientId = responseClient.dataValues.id;
      const history = await HistoryClient.create({
        date,
        comment,
        originMsg,
        payment,
        paymentConcept,
        paymentId,
        ClientId,
      });
    } else {
      const pendients = await Pendient.create({
        date,
        comment,
        email,
        originMsg,
        payment,
        paymentConcept,
        paymentId,
      });
    }

    //res.json(response.data);
    res.redirect(`${URL_FRONT}/payment/success?name=${name}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = captureOrder;
