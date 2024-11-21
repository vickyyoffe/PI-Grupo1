module.exports =  function(sequelize, dataTypes) {

    let alias = "Producto";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER

        },

        usuario_id: {
            type : dataTypes.INTEGER(10)
        },

        nombre : {
            type : dataTypes.STRING(250)
        },

        foto : {
            type : dataTypes.STRING(250)
        },

        descripcion : {
            type : dataTypes.STRING(250)
        },

        comentario : {
            type : dataTypes.STRING(250)
        },

        created_at: {
            type : dataTypes.DATE
        },

        updated_at: {
            type : dataTypes.DATE
        },

        deleted_at: {
            type : dataTypes.DATE
        }
    };

    let config = {
        tableName : "productos",
        timestamps : true,
        underscored : true
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuario_id", 
        })
         }

    return Producto;
    
};