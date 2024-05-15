import 'dotenv/config'

export const enviroments = {
    PORT: process.env.PORT || 5000,
    SECRET: process.env.SECRET || '',
    DB: {
    DB_NAME: process.env.DB_NAME || 'legalDocs',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_PORT: process.env.DB_PORT || '3306' ,
    DB_DIALECT: process.env.DB_DIALECT ||'mysql',
    }
}