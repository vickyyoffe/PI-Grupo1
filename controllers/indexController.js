const { Association } = require('sequelize');
const db = require('../database/models'); // cambio lo que estaba de db por models
const op = db.Sequelize.Op

const indexController = {
  index: function (req, res) {

  let filtrado = {
          include:[
            {association: "usuarios"}],
          order:[
            ["created_at", "DESC"]
            ]}

    db.Producto.findAll(filtrado)

    .then(function(results) {
      //return res.send(results)
       return res.render("index", {lista: results})
   }).catch(function(err) {
      return console.log(err);
   });

  }

}
module.exports = indexController;