const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    registerPost: function (req, res) {  
        let form = req.body;
    
        // Validación de los campos para que sean obligatorios
        if (!form.email) {
            return res.send('El campo "email" no puede estar vacío.'); 
        } else if (!form.contrasenia) {
            return res.send('El campo "contraseña" no puede estar vacío.'); 
        } else if (!form.nombre) {
            return res.send('El campo "nombre" no puede estar vacío.'); 
        }
    
        // Para que la contraseña quede encriptada
        form.contrasenia = bcryptjs.hashSync(form.contrasenia, 10);
    
        db.Usuario.create(form) 
            .then(function (results) {
                return res.redirect("/users/login"); 
            })
            .catch(function (err) {
                console.error("Error al registrar el usuario:", err); // Usa console.error para resaltarlo
                return res.send("Hubo un problema al registrar el usuario.");
            });
            
    }
    
}

module.exports = userController;