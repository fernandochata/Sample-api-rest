import Product from '../models/product.model.js';

/**
 * * GET /products/
 * Retorna un arreglo con todos los productos dentro de la coleccion
 * @param {Array<Product>} response arreglo de todos los productos
 */
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) return res.status(404).json({message: 'Products collection is empty'}); // 404 not found
        res.json(products);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
};

/**
 * * GET /products/:id
 * Retorna un producto según su id
 * @param {String} request.params.id corresponde al id del producto
 * @param {Product} response producto encontrado
 */
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(req.params.id);
        if(!product) return res.status(404).json({message: 'Product not found'}); // 404 not found
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
};

/**
 * * POST /products
 * Crea un nuevo producto en la colección
 * @param {JSON} request.body corresponde al nuevo producto (en formato JSON)
 * @param {Product} response producto creado
 */
export const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        if(!product) return res.status(400).json({message: 'Product not created'}); // 400 Bad Request
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * PUT /products/:id
 * Actualiza un producto según su id
 * @param {String} request.params.id Corresponde al id del producto a actualizar
 * @param {JSON} request.body Corresponde al nuevo producto (en formato JSON)
 * @param {Product} response producto actualizado
 */
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product) return res.status(400).json({message: 'Product not found'}); // 400 Bad Request
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * DELETE /products/:id
 * Elimina un producto según su id
 * @param {String} request.params.id Corresponde al id del producto a eliminar
 * @param {Product} response producto eliminado
 */
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product) return res.status(404).json({message: 'Product not found'}); // 404 not found
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}

/**
 * * DELETE /products/
 * Elimina todos los productos
 * @param {JSON} response mensaje con la cantidad de productos eliminados
 */
 export const deleteProducts = async (req, res) => {
    try {
        const products = await Product.deleteMany();
        if (products.deletedCount === 0) return res.status(404).json({message: 'Products collection actually is empty'}); // 404 not found
        res.json({message: `Products deleted ${products.deletedCount}`});
    } catch (error) {
        return res.status(500).json({message: error.message}); // 500 Internal Server Error
    }
}