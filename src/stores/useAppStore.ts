import { create } from "zustand";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    //obtengo todos los datos y argumentos del slice de mi store
    
    ...createRecipeSlice(...a)
})))