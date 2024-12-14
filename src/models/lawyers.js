import { connection } from "../config/database.js";
import {DataTypes} from "sequelize"


export const Lawyers = connection.define('Lawyers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true  // indica que el correo sea unico
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true  // indica que el dni sea unico
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Lawyers' // Corrected table name
});

// funcion para crear las tablas si este no existe
export async function createLawersTable() {
    try{
        await Lawyers.sync({ force:false});
        console.log("la tabla de abogados se ha creado");
}
    catch(error) {
        console.log(error, "error al crear la tabla de abogados");
    }
}
createLawersTable()