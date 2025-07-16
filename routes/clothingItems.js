const router = require("express").Router();
const {
  getItems,
  createItem,
  getItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.get("/:itemId", getItem);
router.delete("/:itemId", deleteItem);
router.post("/", createItem);
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);

module.exports = router;
