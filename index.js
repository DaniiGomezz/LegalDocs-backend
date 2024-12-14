//                   IMPORTACIONES  
//              (Framework y dependencias)

import express from "express";
//                   IMPORTACIONES  
//           (Base de datos y configuraciones)


// Importación de las configuraciones (base de datos y puerto) desde el archivo de entornos.
import { enviroments } from "./src/config/enviroments.js";
import { connection } from "./src/config/database.js";

// importacion de modelos

import { Client } from "./src/models/client.js";
import { Lawyers } from "./src/models/lawyers.js";


// Creación de una instancia de la aplicación Express.
const app = express();

// Configuración del servidor para escuchar en el puerto definido en el archivo de entornos.
app.listen(enviroments.PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${enviroments.PORT}`);
});
