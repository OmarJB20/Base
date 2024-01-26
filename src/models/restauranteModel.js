const restaurante = (sequilze, type) => {
    return sequilze.define('restaurante', {
        idRestaurante: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_SubCategorias: type.STRING(20),
        precio: type.STRING(20),
       
    

        crearRestaurante:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        updaleRestaurante:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = restaurante