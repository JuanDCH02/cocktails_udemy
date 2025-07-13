import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/recipe.service"
import type { Categories, Drink, Drinks, Recipe, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    //adapto la estructura de mi state segun como viene de la api
    categories: {
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        //meto en el state las categorias que me trae la api
        const categories = await getCategories()
        set({ categories })
    },
    searchRecipes: async (filters) =>{
        //meto en el state los tragos que me trae la api segun los datos del form
        const drinks = await getRecipes(filters)
        set({ drinks })
    },
    selectRecipe: async (id) => {
        //busco toda la data de la receta seleccionada
        const selectedRecipe = await getRecipeById(id) 
        set({ selectedRecipe})
    }

})