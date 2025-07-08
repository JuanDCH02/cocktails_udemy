import axios from "axios"
import { categoriesAPIResponseSchema } from "../schemas/recipes-schemas"

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