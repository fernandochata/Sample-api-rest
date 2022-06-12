import { body } from 'express-validator';

export const validacionEmail = [body("email","Formato incorrecto").trim().isEmail().normalizeEmail().isLength({min: 6})]