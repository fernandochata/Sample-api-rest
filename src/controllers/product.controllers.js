import Product from '../models/product.model.js';

/**
 * * GET /products/
 * Retorna todos los productos
 */
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) return res.status(404).json({msg: 'Products not found'});
        res.json(products);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

/**
 * * GET /products/:id
 * Retorna un producto según su id
 */
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(req.params.id);
        if(!product) return res.status(404).json({msg: 'Product not found'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

/**
 * * POST /products
 * Crea un nuevo producto
 */
export const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        if(!product) return res.status(400).json({msg: 'Product not created'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

/**
 * * PUT /products/:id
 * Actualiza un producto según su id
 */
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product) return res.status(404).json({msg: 'Product not found'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

/**
 * * DELETE /products/:id
 * Elimina un producto según su id
 */
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product) return res.status(404).json({msg: 'Product not found'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
