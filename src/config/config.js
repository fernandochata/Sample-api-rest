import 'dotenv/config'

//config()

const db = {
    port: process.env.PORT,
    db: {
        mongodb: process.env.URI_MONGODB,
        postgresql: {
            user: process.env.DB_USER_PG,
            host: process.env.DB_HOST_PG,
            database: process.env.DB_DATABASE_PG,
            password: process.env.DB_PASSWORD_PG,
            port: process.env.DB_PORT_PG,
        }
    }
}

export default db;