var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('prueba');
});

router.get("/register", userController.register);
router.post("/register", userController.registerPost);

module.exports = router;
