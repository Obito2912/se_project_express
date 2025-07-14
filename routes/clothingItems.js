const router = require("express").Router();
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.get("/:itemId", getItem);
router.put("/:itemId", updateItem);
router.delete("/:itemId", deleteItem);
router.post("/", createItem);
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);

module.exports = router;
