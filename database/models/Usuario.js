module.exports =  function(sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER

        },
        nombre : {
            type : dataTypes.STRING(250)
        },
        email : {
            type : dataTypes.STRING(250)
        },
        contrasenia : {
            type : dataTypes.STRING(250)
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        },
    };

    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored : false
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "usuario_id", 
	       
        });
    }

    
    return Usuario;
    
}