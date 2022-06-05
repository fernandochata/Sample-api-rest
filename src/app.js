import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);

/**
 * * MIDDLEWARES
 * 
 * * morgan (https://www.npmjs.com/package/morgan)
 * muesta info de solicitudes tipo GET, POST, DELETE, PUT con codigos de respuesta
 * * cors (https://www.npmjs.com/package/cors)
 * permite que una aplicacion se comunique con otra a traves de una API (origenes cruzados)
 * * express.json (https://www.npmjs.com/package/express-json)
 * permite que una aplicacion pueda recibir y enviar objetos JSON
 * 
 */

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

/**
 * * ROUTES
 */
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

export default app;