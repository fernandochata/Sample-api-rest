import fs from 'fs-extra';

import Product from '../models/product.model.js';

import { uploadImage, deleteImage } from '../config/cloudinary.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) return res.status(404).json({msg: 'Products not found'});
        res.json(products);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
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

export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            newProduct.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath);
        }

        const product = await newProduct.save();
        if(!product) return res.status(400).json({msg: 'Product not created'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product) return res.status(404).json({msg: 'Product not found'});
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product) return res.status(404).json({msg: 'Product not found'});
        if(product.image?.public_id) await deleteImage(product.image.public_id);
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}
