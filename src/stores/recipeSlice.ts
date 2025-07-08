import type { StateCreator } from "zustand"
import { getCategories } from "../services/recipe.service"
import type { Categories } from "../types"

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    //adapto la estructura de mi state segun como viene de la api
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })
    }

})