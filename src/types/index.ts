import { z } from 'zod'
import type { categoriesAPIResponseSchema } from '../schemas/recipes-schemas'

//creo un type inferiendo el schema creado del resultado de la api
export type Categories = z.infer<typeof categoriesAPIResponseSchema>