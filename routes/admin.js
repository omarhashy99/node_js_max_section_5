const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.get("/products", adminController.getProducts);
router.post("/edit-product", adminController.postEditProduct);
router.get("/edit-product/:productId", adminController.getEditProduct);
// exports.routes = router;
router.post("/delete-product", adminController.postDeleteProduct);
module.exports = router;
