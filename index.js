// Importacion de las dependencias.
import express from "express"


// importacion de las configuraciones (base de datos y el puerto).
import { enviroments } from "./config/enviroments.js"

const app = express()


app.listen(enviroments.PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${enviroments.PORT}`)
})

