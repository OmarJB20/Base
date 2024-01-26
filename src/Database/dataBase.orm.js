const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });

//!Sincronia

const gerenteModel = require('../models/gerenteModel')
const restauranteModel = require('../models/gerenteModel')
const menuModel = require('../models/menuModel')
const crearplatoModel = require('../models/crearplatoModel')
const categoriaModel = require('../models/categoriaModel')
const subcategoriaModel = require('../models/subcategoriaModel')
const carrocomprasModel = require('../models/carrocomprasModel')
const metododepagoModel = require('../models/metododepagoModel')


const gerente = gerenteModel(sequelize, Sequelize)
const restaurante = restauranteModel(sequelize, Sequelize)    
const menu = menuModel(sequelize, Sequelize)
const crearplato = crearplatoModel(sequelize, Sequelize)
const categoria = categoriaModel(sequelize, Sequelize) 
const subcategoria = subcategoriaModel(sequelize, Sequelize)
const carrocompras = carrocomprasModel(sequelize, Sequelize)
const metododepago = metododepagoModel(sequelize, Sequelize)


//!Relaciones

gerente.hasMany(restaurante)
restaurante.belongsTo(gerente)
menu.belongsTo(crearplato)
crearplato.belongsTo(menu)
categoria.hasMany(subcategoria)
subcategoria.belongsTo(categoria)
carrocompras.hasMany(metododepago)
metododepago.belongsTo(carrocompras)


// Exportar el objeto sequelize
module.exports = sequelize;



