/**
 * * Conexión con BBDD: MongoDB
 */
 
import mongoose from 'mongoose';
import 'dotenv/config'

export async function connectToMongoDB() {
    try {
        const username = process.env.MONGODB_URI_USERNAME;
        const password = process.env.MONGODB_URI_PASSWORD;
        const host = process.env.MONGODB_URI_HOST;
        const options = process.env.MONGODB_URI_OPTIONS;
//      await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${options}`);
        console.log('Connected to DB...');
    } catch (error) {
        console.error(error);
    }
}

/**
 * * Conexión con BBDD: PostgreSQL
 */

import pg from 'pg';

export const pool = new pg.Pool({
    user: process.env.DB_USER_PG,
    host: process.env.DB_HOST_PG,
    database: process.env.DB_DATABASE_PG,
    password: process.env.DB_PASSWORD_PG,
    port: process.env.DB_PORT_PG
});
