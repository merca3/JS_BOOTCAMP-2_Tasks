import { Router } from "express";
import productsRoutes from './products.js';
import {
    storeCategory,
    getAllCategories,
    getCategoryByID,
    deleteCategory,
    updateCategory
} from '../models/category.js';
import { getProductsByCategoryID } from '../models/product.js';

const router = Router();
router.use('/:id/Products', productsRoutes);

router.get('/', (req, res) => {
    const categories = getAllCategories();
    res.json(categories);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const category = getCategoryByID(id);
    if (category) {
        res.json(category);
        return;
    }
    res.status(404).json({ error: 'Not found' });
})

router.post('/', (req, res) => {
    storeCategory(req.body);
    res.json({ success: true });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const category = getCategoryByID(id);
    if (!category) {
        res.status(404).json({ error: 'Not found' });
        return;
    }
    updateCategory(id, category, req.body);
    res.json({ success: true });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const category = getCategoryByID(id);
    if (!category) {
        res.status(404).json({ error: 'Not found' });
        return;
    }
    deleteCategory(id);
    res.json({ success: true });
})



router.get('/:id/Products', (req, res) => {
    // get all products
    // iterate through them, check the category
    // add to a new array
    const { id } = req.params;
})

export default router;