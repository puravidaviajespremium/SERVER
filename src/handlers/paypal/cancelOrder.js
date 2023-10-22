const cancelOrder = (req, res) => {
  // res.json({ status: "Cancelado" });
  res.redirect("http://localhost:5173/payment/cancel")
};
module.exports = cancelOrder;
