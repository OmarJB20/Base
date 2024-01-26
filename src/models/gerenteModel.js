const gerente = (sequilze, type) => {
    return sequilze.define('gerente', {
        idGerente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: type.STRING(20),
        nombreCompleto: type.STRING(30),
        email: type.STRING(30),
        contraseña: type.STRING(30),

        creargerente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        actualizargerente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = gerente