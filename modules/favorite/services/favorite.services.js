import { FavoriteModel } from "../models/favorite.js";

const createFavorite = async (data) => {
    try {
        const favorite = await FavoriteModel.create(data);
        return favorite;
    } catch (error) {
        throw new Error(error.message);
    }
};



const FavoriteService = {
    createFavorite,
    //   find,
    //   findById,
};

export default FavoriteService;