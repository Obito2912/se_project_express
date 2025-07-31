const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const {
  createIdValidator,
  validateCardBody,
} = require("../middlewares/validation");

router.get("/", getItems);
router.post("/", auth, validateCardBody, createItem);
router.delete("/:itemId", auth, createIdValidator("itemId"), deleteItem);
router.put("/:itemId/likes", auth, createIdValidator("itemId"), likeItem);
router.delete("/:itemId/likes", auth, createIdValidator("itemId"), dislikeItem);

module.exports = router;
