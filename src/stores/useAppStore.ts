import { create } from "zustand";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";
import { createNotificationsSlice, type NotificationsSliceType } from "./notificationsSlice";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType
    & FavoritesSliceType & NotificationsSliceType>()(devtools((...a) => ({
    //obtengo todos los datos y argumentos del slice de mi store
    
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a)
})))