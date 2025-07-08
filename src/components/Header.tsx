import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export const Header = () => {

    const {pathname} = useLocation()
    const isHome = useMemo (() => pathname === '/', [pathname])
    const {fetchCategories} = useAppStore()
    const {categories} = useAppStore()

    useEffect(() => {
        fetchCategories()
    },[fetchCategories])

  return (
    <header className={isHome?'bg-[url(/bg.jpg)] bg-center bg-cover ':'bg-slate-800'}>
        <div className="container mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                {/*IMAGEN DE MI HEADER*/}
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>
                {/*BOTONES DE NAVEGACION*/}
                <nav className="flex gap-4">
                    <NavLink 
                        className={({isActive}) => 
                        isActive?'text-orange-500 uppercase font-bold'
                        :"text-white uppercase font-bold"}
                        to={'/'}
                        >Inicio
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => 
                        isActive?'text-orange-500 uppercase font-bold'
                        :"text-white uppercase font-bold"}
                        to={'/favorites'}
                        >Favoritos
                    </NavLink>
                </nav>
            </div>

            {/* si estoy en HOME muestro form para buscar cocteles*/}
            {isHome &&(
                <form className="md:w-1/2 2xl:1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" >
                    <div className="space-y-4">
                        <label htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                            >nombre o ingrediente
                        </label>
                        <input type="text" 
                            id="ingredient" name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            placeholder="vodka, tequila, café"
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="category"
                            className="block text-white uppercase font-extrabold text-lg"
                            >categoria
                        </label>
                        <select name="category" id="category"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            >categoria
                            <option value="">-- Seleccione --</option>
                            {
                                categories.drinks.map(drink => (
                                    <option 
                                        key={drink.strCategory} 
                                        value={drink.strCategory}
                                    >{drink.strCategory}</option>
                                ))
                            }

                        </select>
                    </div>
                    <input type="submit"
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 
                        w-full text-white p-2 rounded-lg uppercase font-extrabold"
                        value={'Buscar Recetas'} 
                    />
                </form>
            )}
        </div>
    </header>
  )
}
