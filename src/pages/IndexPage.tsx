import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"

export const IndexPage = () => {

  const {drinks} = useAppStore()

  //compruebo si tengo alguna bebida
  const hasDrinks = useMemo(() => drinks.drinks.length ,[drinks])


  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas:</h1>
      {hasDrinks?
      (<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map((drnk) =>(
            <DrinkCard
              key={drnk.idDrink}
              drink = {drnk}
            />
          ))}
      </div>)
      :(  <p className="my-10 text-center text-2xl">
            No hay Resultados, realiza una busqueda.
          </p>
      )}
    </>
  )
}
