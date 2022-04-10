const Products = require("../models/Product.js");

//////////////Get all product
/////////////////route: /
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    res.status(200).json({
      status: "successful",
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: "Something went wrong",
    });
  }
};

//////////////Single product
/////////////////route: /:id
exports.getProduct = async (req, res, next) => {
  let product;
  try {
    product = await Products.findById(req.params.id);
    res.status(200).json({
      status: "successful",
      data: product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: "Product not found",
    });
  }
};
