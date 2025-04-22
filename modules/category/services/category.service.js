import { CategoryModel } from "../models/category.js";

const createCategory = async (data) => {
    try {
        const category = await CategoryModel.create(data);
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
};

const CategoryServices = {
    createCategory,
    //   find,
    //   findById,
};

export default CategoryServices;