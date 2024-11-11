const db = require('../database/models');
const bycryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    registerPost: function (req,res) {  
        let form = req.body; 
        form.contrasenia = bycryptjs.hashSync(form.contrasenia, 10) 

        db.Usuario.create(form) 
        .then(function (results) {
            return res.redirect("/users/login") 
        })
        .catch(function (err) {
            return console.log(err);
        })
    },
}

module.exports = userController;