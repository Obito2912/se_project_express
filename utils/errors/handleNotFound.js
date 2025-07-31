const NOT_FOUND = 404;

const handleNotFound = (req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
};

module.exports = handleNotFound;
