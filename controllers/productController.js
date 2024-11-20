const db = require('../database/models');
const op = db.Sequelize.Op;

const productosController = {
    
    productAdd: function (req, res) {
        res.render("productAdd");
    },
    store: function (req, res) {
        let productos = req.body;
        db.Producto.create(productos)
          .then(() => {
            return res.redirect("/product");
          })
          .catch((err) => {
            console.error(err);
            return res.status(500).send("Error al crear el producto");
          });
    }
};  

module.exports = productosController;