import { readFileSync, accessSync, writeFileSync } from 'fs';

const filePath = `${process.cwd()}/data/products.json`;

const getAllProducts = () => {
    try {
        accessSync(filePath);
        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.log(`Error is: ${err}`);
    }
    return '';
}

const saveFilePr = (newContent) => {
    try {
        accessSync(filePath);
        writeFileSync(filePath, JSON.stringify(newContent));
    } catch (err) {
        console.log(`Error is: ${err}`);
    }
}

const storeProduct = (data) => {
    const existingData = getAllProducts();
    const newProduct = {
        name: data.name || '',
        description: data.description || '',
        price: data.price || '',
        category: data.category || '',
    };
    existingData.push(newProduct);
    saveFilePr(existingData);
}

const getProductByID = (id) => {
    const products = getAllProducts();
    return products[id];
}

const updateProduct = (id, product, newData) => {
    product.name = newData.name || '';
    product.description = newData.description || '';
    product.price = newData.price || '';
    product.category = newData.category || '';
    const products = getAllProducts();
    products[id] = product;
    saveFilePr(products);
}

const deleteProduct = (id) => {
    const products = getAllProducts();
    products.splice(id, 1);
    saveFilePr(products)
}

// const getProductsByCategoryID = (catID) => {
//     if (parseInt(catID))

// }

export {
    storeProduct,
    getAllProducts,
    getProductByID,
    deleteProduct,
    updateProduct,
    getProductsByCategoryID
}