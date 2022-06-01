import Product from '../models/product.model.js';

/**
 * * GET /products/
 * Retorna todos los productos
 * @return {Array} Array de productos
 */
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) return res.status(204).json({msg: 'Products not found'}); // 204 No Content
        res.json(products);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
};

/**
 * * GET /products/:id
 * Retorna un producto según su id
 * @param id corresponde al id del producto
 * @return {Product} Producto
 */
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(req.params.id);
        if(!product) return res.status(204).json({msg: 'Product not found'}); // 204 No Content
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
};

/**
 * * POST /products
 * Crea un nuevo producto
 * @param req.body corresponde al nuevo producto (en formato JSON)
 * @return {Product} Producto creado
 */
export const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        if(!product) return res.status(400).json({msg: 'Product not created'}); // 400 Bad Request
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * PUT /products/:id
 * Actualiza un producto según su id
 * @param req.params.id Corresponde al id del producto a actualizar
 * @param req.body Corresponde al nuevo producto (en formato JSON)
 * @return {Product} Producto actualizado
 */
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product) return res.status(400).json({msg: 'Product not found'}); // 400 Bad Request
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * DELETE /products/:id
 * Elimina un producto según su id
 * @param id Corresponde al id del producto a eliminar
 * @return {Object} Producto eliminado
 */
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product) return res.status(204).json({msg: 'Product not found'}); // 204 No Content
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * DELETE /products/
 * Elimina todos los productos
 * @return {Number} Cantidad de productos eliminados
 */
 export const deleteProducts = async (req, res) => {
    try {
        const products = await Product.deleteMany();
        if (products.length === 0) return res.status(204).json({msg: 'Products not found'}); // 204 No Content
        res.json(productsDeleted);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}