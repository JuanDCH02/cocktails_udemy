import {z} from 'zod'

export const categoriesAPIResponseSchema= z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})
export const searchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})
export const drinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})
export const drinksAPIResponse = z.object({
    drinks: z.array(drinkAPIResponse)
})
export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
  });