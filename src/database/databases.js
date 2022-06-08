/**
 * * Conexión con BBDD: MongoDB
 */
 
import mongoose from 'mongoose';
import 'dotenv/config'

export async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
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
