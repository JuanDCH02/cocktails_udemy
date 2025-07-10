import axios from "axios"
import { categoriesAPIResponseSchema, drinksAPIResponse } from "../schemas/recipes-schemas"
import type { SearchFilter } from "../types"

export async function getCategories() {
    //hago el llamado a la api y tipo los resultados con mi schema
    const url = ('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    const {data} = await axios(url)
    const result = categoriesAPIResponseSchema.safeParse(data)
    //si les obtengo retorno los datos
    if(result.success){
        return result.data
    }
}
export async function getRecipes(filters:SearchFilter) {
    //busco recetas segun los filtros ingresados
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`)
    const {data} = await axios(url)
    const result = drinksAPIResponse.safeParse(data)
    if(result.success){
        return result.data
    }
}