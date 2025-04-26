// services/seedCategory.js
import CategoryServices from "../services/category.service.js";


export const createCategory = async (req, res) => {
    try {
        const category = {
            name: req.body.name,
        };

        const newCategory = await CategoryServices.createCategory(category);

        res.status(200).json({ success: true, data: newCategory, code: 0 });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, code: 1 });
    }
};

export const getListCategory = async (req, res) => {
    try {
        const Category = await CategoryServices.getListCategory();

        res.status(200).json({ success: true, data: Category, code: 0 });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message, code: 1 });
    }
}

export const getListCategoryById = async (req, res) => {
    try {
        const Category = await CategoryServices.getListCategoryById(req.params.category);

        res.status(200).json({ success: true, data: Category, code: 0 });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message, code: 1 });
    }
}
