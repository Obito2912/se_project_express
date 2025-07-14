const router = require("express").Router();

const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.use("/users", usersRouter);
router.use("/clothingItems", clothingItemsRouter);

module.exports = router;
