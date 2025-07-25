import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}


export const DrinkCard = ({drink} : DrinkCardProps) => {

    const {selectRecipe} = useAppStore()


    return (
        <div className="border border-orange-300 rounded shadow-lg">
            <div className="overflow-hidden">
                <img src={drink.strDrinkThumb}
                    alt={`imagen de ${drink.strDrink}`}
                    className="hover:scale-110 transition-transform hover:rotate-3"
                />
            </div>

            <div className="p-5 ">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                    onClick={() => selectRecipe(drink.idDrink)} >
                Ver receta</button>
            </div>
        
        </div>
    )

}
