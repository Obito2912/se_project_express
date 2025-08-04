const NotFoundError = require("./NotFoundError");

const handleNotFound = (_req, _res, next) => {
  next(new NotFoundError("Requested resource not found"));
};

module.exports = handleNotFound;
