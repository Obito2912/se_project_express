const jwt = require("jsonwebtoken");
const { UNAUTHORIZE } = require("../utils/errors/handleNotFound");
const { JWT_SECRET } = require("../utils/config");

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(UNAUTHORIZE).send({ message: "Authorization required" });
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(UNAUTHORIZE).send({ message: "Authorization required" });
  }

  req.user = payload;
  next();
};
