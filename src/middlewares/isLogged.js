module.exports = (req, res, next) => {
  let logged = true;
  if (logged) {
    next();
  } else {
    res.send("Para esta funcion debe permisos");
  }
};
