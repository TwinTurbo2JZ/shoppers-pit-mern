const express = require("express");
const router = express.Router();

const { getProducts, getProduct } = require("../controllers/Products.js");

router.route("/").get(getProducts);
router.route("/:id").get(getProduct);

router.get("/pri", async (req, res) => {
  res.status(200).json({
    status: "gg",
  });
});

module.exports = router;
