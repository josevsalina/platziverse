const debug = require('debug')('platziverse-db:setup')

// Objeto de configuración de la Base de Datos
module.exports = function (init = true) {
  return { 
    database: process.env.DB_NAME || 'platziverse', 
    username: process.env.DB_USER || 'desarrollador', 
    password: process.env.DB_PASSWORD || '1234560', 
    host: process.env.DB_HOST || 'localhost', 
    dialect: 'postgres', 
    setup: init, 
    logging: s => debug(s) 
  } 
}