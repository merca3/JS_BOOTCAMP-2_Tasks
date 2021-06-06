import { readFileSync, accessSync, writeFileSync } from 'fs';

const filePath = `${process.cwd()}/data/categories.json`;

const getAllCategories = () => {
    try {
        accessSync(filePath);
        return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.log(`Error is: ${err}`);
    }
    return '';
}

const saveFile = (newContent) => {
    try {
        accessSync(filePath);
        writeFileSync(filePath, JSON.stringify(newContent));
    } catch (err) {
        console.log(`Error is: ${err}`);
    }
}

const storeCategory = (data) => {
    const existingData = getAllCategories();
    const newCategory = {
        name: data.name || '',
        description: data.description || '',
    };
    existingData.push(newCategory);
    saveFile(existingData);
}

const getCategoryByID = (id) => {
    const categories = getAllCategories();
    return categories[id];
}

const updateCategory = (id, category, newData) => {
    category.name = newData.name || '';
    category.description = newData.description || '';
    const categories = getAllCategories();
    categories[id] = category;
    saveFile(categories);
}

const deleteCategory = (id) => {
    const categories = getAllCategories();
    categories.splice(id, 1);
    saveFile(categories)
}

export {
    storeCategory,
    getAllCategories,
    getCategoryByID,
    deleteCategory,
    updateCategory
}