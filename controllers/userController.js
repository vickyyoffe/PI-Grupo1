const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
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
    }
    
    
}

module.exports = userController;