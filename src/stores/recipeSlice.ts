import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/recipe.service"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    //adapto la estructura de mi state segun como viene de la api
    categories: {
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    fetchCategories: async () => {
        //meto en el state las categorias que me trae la api
        const categories = await getCategories()
        set({ categories })
    },
    searchRecipes: async (filters) =>{
        //meto en el state los tragos que me trae la api
        const drinks = await getRecipes(filters)
        set({ drinks })
    }

})