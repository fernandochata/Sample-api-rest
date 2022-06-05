/**
 * * Conexión con BBDD: MongoDB
 */
 
import mongoose from 'mongoose';

//const MONGO_URI = 'mongodb+srv://fernando:fernando@cluster.7aaup.mongodb.net/?retryWrites=true&w=majority';
const MONGO_URI = 'mongodb://localhost:27017/test'

export async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGO_URI);
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
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'pswd',
    port: 5432,
});
