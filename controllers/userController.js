const { Association } = require('sequelize');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        if (req.session.user != undefined){ //USER es la propiedad que puse en el controller
            return res.redirect("/");
          }
         else {return res.render("register")}

    },
    registerPost: function (req, res) {  
        let form = req.body;
    
        // Validaciones
        if (!form.email) {
            return res.send('El campo "email" no puede estar vacío.'); 
        } else if (!form.contrasenia) {
            return res.send('El campo "contraseña" no puede estar vacío.'); 
        } else if (!form.nombre) {
            return res.send('El campo "nombre" no puede estar vacío.'); 
        }
    
        // Verificamos si el email  existe
        db.Usuario.findOne({ where: { email: form.email } })
            .then(function (results) {
                if (results) {
                    // Si el email ya existe, enviar mensaje al usuario
                    return res.send('El email ingresado ya está registrado. Intente con otro.');
                }
    
                // Si no existe, encriptamos la contraseña y creamos el usuario
                form.contrasenia = bcryptjs.hashSync(form.contrasenia, 10);
    
                return db.Usuario.create(form);  // Ahora creamos el usuario
            })
            .then(function () {
                return res.redirect("/users/login"); 
            })
            .catch(function (err) {
                console.log("Error al registrar el usuario:", err); 
                return res.send("Hubo un problema al registrar el usuario.");
            });
    },
    login: (req, res)=>{
        if (req.session.user != undefined){ //USER es la propiedad que puse en el controller
            return res.redirect("/");
          }
         else {
            return res.render("login")}
         
    },
    loginPost: function (req,res) {
        let form = req.body;
        let filtrado = {
            where: {email: form.email}
        }
        db.Usuario.findOne(filtrado)
        .then(function (result) {
            if (!result){
                return res.send("No hay un usuario con este mail")
            }else{
                let check = bcryptjs.compareSync(form.contrasenia,result.contrasenia) 
                if (check) {
                    req.session.user = result.dataValues; 
                    
                    return res.redirect("/");
                } else{
                    return res.send("La contraseña es incorrecta") 
                }
            }
        })
        .catch(function (err) {
            console.log(err);    
        }) 
    }, 
    logout: function (req,res) {
        req.session.destroy();
        return res.redirect("/")
    },
    profile: function (req, res) {
        let id = req.params.id;
    
        db.Usuario.findByPk(id, {
            include: [{ association: "productos" }]
        })
        .then(function (results) {
            return res.render("profile", { lista: results });
        })
        .catch(function (err) {
            console.log(err);
        });
    }
    
};


module.exports = userController;