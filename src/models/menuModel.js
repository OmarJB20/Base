const menu = (sequilze, type) => {
    return sequilze.define('menu', {
        idMenu: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_idCrearPlato: type.STRING(20),
       

        crearMenu:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        },
        actualizarMenu:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNULL: false
        }
    }, {
        timestamp: false
    })
}

module.exports = menu