const crearplato = (sequilze, type) => {
    return sequilze.define('crear plato', {
        idCrearPlato: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombe: type.STRING(20),
        descripcion: type.STRING(20),
        precio: type.STRING(20),
        
        crearPlato:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        actualizarPlato:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = crearplato