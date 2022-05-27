import { Router} from 'express';
import fileUpload from 'express-fileupload'
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controllers.js';


const router = Router();

router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', fileUpload({ useTempFiles: true, tempFileDir:'./uploads'}), createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


export default router;
