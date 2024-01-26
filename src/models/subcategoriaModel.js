const subcategoria = (sequilze, type) => {
    return sequilze.define('psubcategoria', {
        idSubgategoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria: type.STRING(20),
        precio: type.STRING(20),
        
    

        crearSubcategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        actualizarSubcategoria:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = subcategoria