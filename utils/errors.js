const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const handleNotFound = (req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
};

module.exports = {
  handleNotFound,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
};
