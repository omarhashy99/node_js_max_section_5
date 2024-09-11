const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
});
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
