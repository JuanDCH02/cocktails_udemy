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