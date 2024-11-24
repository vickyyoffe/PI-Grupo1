const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const productosController = {
    
    productAdd: function (req, res) {
        res.render("productAdd");
    },
    store: function (req, res) {
        let productos = req.body;
        let objeto = {
          usuario_id: req.session.user.id, 
          nombre:productos.producto,
          foto:productos.imagen,
          descripcion: productos.descripcion,
        }
        db.Producto.create(objeto)
          .then(() => {
            return res.redirect("/");
          })
          .catch((err) => {
            console.error(err);
            return res.status(500).send("Error al crear el producto");
          });
    },
    search: function (req, res) {
      let qs = req.query.search; // Lo que el usuario envió para buscar
      let filtrado = {
          where: {
              nombre: {
                  [op.like]: `%${qs}%` // Consulta con búsqueda similar
              }
          },
          include: [
              {
                  association: "usuarios"
              }
          ],
          order: [['created_at', 'DESC']]
      };
  
      db.Producto.findAll(filtrado)
          .then(function(results) {
      
              console.log('Resultados de búsqueda:', results);
              // Verifica si no hay resultados
              if (results.length === 0) {
                  return res.render("search-results", { lista: [], message: "No hay resultados para su criterio de búsqueda" });
              } else {
                  return res.render("search-results", { lista: results });
              }
          })
        
  
          .catch(function (err) {
              return console.log(err);
          });
  },
  detalle: function (req, res) {
    let id = req.params.idProductos;

    let filtrado = {
      include: [
        { association: "usuarios" }
      ]
    };

    db.Producto.findByPk(id, filtrado)
      .then((results) => {
        if (!results) {
          return res.status(404).send("Producto no encontrado");
        }
        return res.render("product", { lista: results });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send("Error al obtener detalles de la película");
      });
  },
  
}; 


module.exports = productosController;