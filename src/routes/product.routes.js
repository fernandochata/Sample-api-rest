import { Router} from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteProducts } from '../controllers/product.controllers.js';


const router = Router();

router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.delete('/', deleteProducts);

export default router;
