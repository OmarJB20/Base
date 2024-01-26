const categoria = (sequilze, type) => {
    return sequilze.define('categoria', {
        idCategoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombrecategoria: type.STRING(20),
        precio: type.STRING(20),
        

        crearCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        updaleCategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = categoria