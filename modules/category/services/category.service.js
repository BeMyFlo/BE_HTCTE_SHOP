import { CategoryModel } from "../models/category.js";

const createCategory = async (data) => {
    try {
        const category = await CategoryModel.create(data);
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getListCategory = async () => {
    try {
        const category = await CategoryModel.find({});
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getListCategoryById = async (id) => {
    try {
        const category = await CategoryModel.findById(id).exec();
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
}

const CategoryServices = {
    createCategory,
    getListCategory,
    getListCategoryById
    //   find,
    //   findById,
};

export default CategoryServices;