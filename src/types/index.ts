import {z} from 'zod'
import type { categoriesAPIResponseSchema, drinkAPIResponse, drinksAPIResponse, RecipeAPIResponseSchema, searchFilterSchema } from '../schemas/recipes-schemas'

//creo un type inferiendo el schema creado del resultado de la api
export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof searchFilterSchema>
export type Drinks = z.infer<typeof drinksAPIResponse>
export type Drink = z.infer<typeof drinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
