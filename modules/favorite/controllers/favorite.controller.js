import FavoriteService from "../services/favorite.services.js";


export const createFavorite = async (req, res) => {
    try {
        const favorite = {
            product: req.body.product,
            user: req.body.user
        };

        const newFavorite = await FavoriteService.createFavorite(favorite);

        res.status(200).json({ success: true, data: newFavorite, code: 0 });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, code: 1 });
    }
};

