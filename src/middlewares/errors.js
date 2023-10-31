module.exports = (error, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = error.status || 500;
  const message = error.message || error;
  console.error(error);
  res.status(status).send(message);
};
