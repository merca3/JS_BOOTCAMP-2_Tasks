import { Router } from "express";

const router = Router()

import {
    storeProduct,
    getAllProducts,
    getProductByID,
    deleteProduct,
    updateProduct
} from '../models/product.js';

router.get('/', (req, res) => {
    const products = getAllProducts();
    res.json(products);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = getProductByID(id);
    if (product) {
        res.json(product);
        return;
    }
    res.status(404).json({ error: 'Not found' });
})

router.post('/', (req, res) => {
    storeProduct(req.body);
    res.json({ success: true });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const product = getProductByID(id);
    if (!product) {
        res.status(404).json({ error: 'Not found' });
        return;
    }
    updateProduct(id, product, req.body);
    res.json({ success: true });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const product = getProductByID(id);
    if (!product) {
        res.status(404).json({ error: 'Not found' });
        return;
    }
    deleteProduct(id);
    res.json({ success: true });
})






export default router;