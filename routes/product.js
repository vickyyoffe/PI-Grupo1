var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get("/productAdd", productController.productAdd);
router.post("/productAdd", productController.store); 

router.get("/busqueda", productController.search); 

router.get("/detalle/:idProductos", productController.detalle); 

module.exports = router;
