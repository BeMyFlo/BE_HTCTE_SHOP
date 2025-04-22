import { ProductModel } from "../models/product.js";

const create = async (data) => {
    try {
        const product = await ProductModel.create(data);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllProducts = async () => {
    try {
        const products = await ProductModel.find({});
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

const findByCategory = async (category) => {
    try {
        const products = await ProductModel.find({ category });
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

const findProductById = async (id) => {
    try {
        const product = await ProductModel.findById(id);
        console.log(product);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteProductById = async (id) => {
    try {
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

const updateProductById = async (id, data) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(id, data,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getListProductHot = async () => {
    try {
        const product = await ProductModel.find({}).sort({ sales: -1 }).limit(5);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
}

const UpdateViewProduct = async (id) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } }, // Tăng view lên 1
            { new: true }           // Trả về bản cập nhật mới
        );
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error(error.message);

    }
}

const getListFeaturedProduct = async () => {
    try {
        const products = await ProductModel.find({ views: { $gt: 0 } })
            .sort({ views: -1 })
            .limit(5);
        if (!products) {
            throw new Error("Product not found");
        }
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
}

const ProductRepository = {
    create,
    getAllProducts,
    findByCategory,
    findProductById,
    deleteProductById, updateProductById, getListProductHot, UpdateViewProduct, getListFeaturedProduct
};

export default ProductRepository;
