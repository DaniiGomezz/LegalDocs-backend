import { Sequelize } from 'sequelize'
import { enviroments } from './enviroments.js'

export const connection = new Sequelize (
    enviroments.DB.DB_NAME,
    enviroments.DB.DB_USER,
    enviroments.DB.DB_PASSWORD,
     {
      host:enviroments.DB.DB_HOST,
      dialect: enviroments.DB.DB_DIALECT,
      port: enviroments.DB.DB_PORT
    }
)

connection.authenticate()
    .then(()=>{
        console.log('Conexion establecida a la base de datos legalDocs')
     // Forzar la sincronización y creación de la base de datos si no existe
     return connection.sync({ force: true });
    })
    
    .catch(()=>{
        console.log('No se pudo realizar la conexion a la base de datos')
    })