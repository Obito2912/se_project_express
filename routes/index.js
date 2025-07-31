const router = require("express").Router();

const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const handleNotFound = require("../utils/errors/handleNotFound");

router.use("/users", usersRouter);
router.use("/items", clothingItemsRouter);
router.use(handleNotFound);

module.exports = router;
