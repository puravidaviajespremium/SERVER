const axios = require("axios");
const reciboPago = require("../../controllers/nodemailers/reciboPago");
require("dotenv").config();
const { CLIENT, SECRET, PAYPAL_API, URL_PAYPAL } = process.env;

const captureOrder = async (req, res) => {
  const { token } = req.query;

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
  console.log(response.data.payment_source.paypal.email_address);
  const id = response.data.id;
  const value =
    response.data.purchase_units[0].payments.captures[0].amount.value;

  reciboPago(name, gmail, id, value);
  res.json(response.data);
  // res.redirect(`http://localhost:5173/payment/success?name=${name}`);
};

module.exports = captureOrder;
