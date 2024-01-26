const metododepago= (sequilze, type) => {
    return sequilze.define('metododepago', {
        idMetododepago: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pago: type.STRING(20),
        datosPersonales: type.STRING(20),
        datosIdentificaciones: type.STRING(20),
        datosSeguridad: type.STRING(20),
        gerente: type.STRING(20),
        estado: type.STRING(20),

        

        crearMetododepago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        updaleMetododepago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = metododepago