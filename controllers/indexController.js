const { Association } = require('sequelize');
const db = require('../database/models'); // Reemplazo por models correctamente
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {
    db.Producto.findAll({
      include: [
        {
          association: 'usuarios', // Se usa el modelo asociado correctamente
        },
      ],
      order: [["created_at", "DESC"]],
    })
      .then(function (results) {
        return res.render( "index",{ lista: results }); // Paso 'lista' a la vista
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

module.exports = indexController;