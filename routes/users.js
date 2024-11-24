var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('prueba');
});

/* Register */
router.get("/register", userController.register);
router.post("/register", userController.registerPost);

/* Login */
router.get('/login', userController.login)
router.post('/login', userController.loginPost)

router.post('/logout', userController.logout)

router.get("/profile/:id", userController.profile) 


module.exports = router;
