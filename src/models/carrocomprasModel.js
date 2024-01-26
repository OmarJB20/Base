const carrocompras = (sequilze, type) => {
    return sequilze.define('carrocompras', {
        idCarrocompras: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        limitaciones: type.STRING(20),
        estado: type.STRING(20),
        

        crearCarrocompras:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        updaleCarrocompras:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = carrocompras