const db = require('../database/models'); // Reemplazo por models correctamente
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {
    db.Producto.findAll({
      include: [
        {
          model: db.Usuario, // Se usa el modelo asociado correctamente
          as: 'usuarios', // Asegúrate de usar el alias definido en las relaciones
        },
      ],
      order: [["createdAt", "DESC"]],
    })
      .then(function (results) {
        return res.render("index", { lista: results }); // Paso 'lista' a la vista
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

module.exports = indexController;
