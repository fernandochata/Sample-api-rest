import { pool } from '../database/databases.js';

export const getUsers = async (req, res) => {
    try {
        const users = await pool.query(`SELECT * FROM users ORDER BY id ASC`);
        if (users.length === 0) return res.status(204).json({ msg: 'Users not found' }); // 204 No Content
        res.json(users.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
        if (!user) return res.status(204).json({ msg: 'User not found' }); // 204 No Content
        res.json(user.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await pool.query(`INSERT INTO users (name) VALUES ('${req.body.name}')`);
        if (!user) return res.status(400).json({ msg: 'User not created' }); // 400 Bad Request
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
};

export const updateUser = async (req, res) => {
    try {
        const data = await pool.query(`UPDATE users SET name = '${req.body.name}' WHERE id = ${req.params.id}`);
        if (data.rowCount === 0) return res.status(400).json({ msg: 'User not found' }); // 400 Bad Request
        res.json({message: 'User updated'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = await pool.query(`DELETE FROM users WHERE id = ${req.params.id}`);
        if (data.rowCount === 0) return res.status(400).json({ msg: 'User not found' }); // 400 Bad Request
        res.json({message: 'User deleted'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}

export const deleteUsers = async (req, res) => {
    try {
        await pool.query(`TRUNCATE TABLE users RESTART IDENTITY`);
        res.json({message: 'Users deleted'});
    } catch (error) {
        return res.status(500).json({ message: error.message }); // 500 Internal Server Error
    }
}