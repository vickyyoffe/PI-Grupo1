module.exports =  function(sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER

        },
        nombre : {
            type : dataTypes.STRING(255)
        },
        email : {
            type : dataTypes.STRING(255)
        },
        contrasenia : {
            type : dataTypes.STRING(255)
        },
        foto: {
            type : dataTypes.STRING(255) 
        },
        created_at: {
            type : dataTypes.DATE
        },
        updated_at: {
            type : dataTypes.DATE
        },
        deleted_at: {
            type : dataTypes.DATE
        },
    };

    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored : true
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