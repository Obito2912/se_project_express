const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  getItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.get("/:itemId", auth, getItem);
router.delete("/:itemId", auth, deleteItem);
router.post("/", auth, createItem);
router.put("/:itemId/likes", auth, likeItem);
router.delete("/:itemId/likes", auth, dislikeItem);

module.exports = router;
