var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get("/productAdd", productController.productAdd);
router.post("/productAdd", productController.store); 

module.exports = router;
