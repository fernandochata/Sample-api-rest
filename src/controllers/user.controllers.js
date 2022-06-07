/**
 * * Postgres database
 * * Conexión con BBDD: PostgreSQL
 */

import { pool } from '../database/databases.js';


/**
 * * GET /users/
 * Retorna todos los usuarios
 * @param {Array<Usuario>} res arreglo de todos usuarios
 */
export const getUsers = async (req, res) => {
    try {
        const users = await pool.query(`SELECT * FROM users ORDER BY id ASC`);
        if (users.rowCount === 0) return res.status(404).json({ message: 'Users not found' }); // error 404 Not Found
        res.json(users.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message }); // error 500 Internal Server Error
    }
};

/**
 * * GET /users/:id
 * Retorna un usuario según su id
 * @param {String} req.params.id id del usuario
 * @param {Array<Usuario>}  res arreglo con un solo usuario
 */
export const getUser = async (req, res) => {
    try {
        const user = await pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
        if (user.rowCount === 0) return res.status(404).json({ msg: 'User not found' }); // 404 Not Found
        res.json(user.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

/**
 * * POST /users
 * Crea un nuevo usuario
 * todo: recorrer el req.body y recoger los campos que sean necesarios para automatizar la consulta
 * todo: validar el ingreso de datos en todos los campos
 * @param {JSON} req.body nuevo usuario en formato JSON
 * @param {JSON} response mensaje de confirmacón
 */
export const createUser = async (req, res) => {
    try {
        //for (let key in req.body) {
        //    if (req.body[key] === '') return res.status(400).json({ message: 'Missing information' }); // 400 Bad Request
        //}

        const user = await pool.query(`INSERT INTO users (name) VALUES ('${req.body.name}')`);
        if (!user) return res.status(400).json({ msg: 'User not created' }); // 400 Bad Request
        res.json({ msg: 'User created' });
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

/**
 * * PUT /users/:id
 * Actualiza un usuario según su id
 * todo: recorrer el req.body y recoger los campos que sean necesarios para automatizar la consulta
 * todo: validar el ingreso de datos en todos los campos
 * @param {String} req.params.id identificador del usuario a actualizar
 * @param {JSON} req.body información del usuario a actualizar	
 * @param {JSON} response mensaje de confirmación
 */
export const updateUser = async (req, res) => {
    try {
        const data = await pool.query(`UPDATE users SET name = '${req.body.name}' WHERE id = ${req.params.id}`);
        if (data.rowCount === 0) return res.status(400).json({ message: 'User not found' }); // 400 Bad Request
        res.json({message: 'User updated'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}

/**
 * * DELETE /users/:id
 * Elimina un usuario según su id
 * @param {String} req.params.id identificador del usuario a eliminar
 * @param {JSON} response mensaje de confirmación
 */
export const deleteUser = async (req, res) => {
    try {
        const data = await pool.query(`DELETE FROM users WHERE id = ${req.params.id}`);
        if (data.rowCount === 0) return res.status(400).json({ msg: 'User not found' }); // 400 Bad Request
        res.json({message: 'User deleted'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}

/**
 * * DELETE /users/
 * Elimina todos los usuarios
 * @param {JSON} response mensaje de confirmación
 */
export const deleteUsers = async (req, res) => {
    try {
        await pool.query(`TRUNCATE TABLE users RESTART IDENTITY`);
        res.json({message: 'Users deleted'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}