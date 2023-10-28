require("dotenv").config();
const { URL_FRONT } = process.env;

const cancelOrder = (req, res) => {
  // res.json({ status: "Cancelado" });
  res.redirect(`${URL_FRONT}/payment/cancel`);
};
module.exports = cancelOrder;
