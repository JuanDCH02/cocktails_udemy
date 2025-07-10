import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export const Header = () => {

    const {pathname} = useLocation()
    const [searchFilters, setSearchFilters] = useState({
        ingredient:'',
        category:''
    })
    const isHome = useMemo (() => pathname === '/', [pathname])
    const {fetchCategories} = useAppStore()
    const {categories} = useAppStore()
    const {searchRecipes} = useAppStore()

    useEffect(() => {
        fetchCategories()
    },[fetchCategories])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //validar
        if(!searchFilters.category || !searchFilters.ingredient){
            console.log('todos los campos son obligatorios')
            return
        }
        //consultar la receta
        searchRecipes(searchFilters)
    }

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
                <form className="md:w-1/2 2xl:1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                    onSubmit={handleSubmit} 
                >
                    <div className="space-y-4">
                        <label htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                            >nombre o ingrediente
                        </label>
                        <input type="text" 
                            id="ingredient" name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            placeholder="vodka, tequila, café"
                            onChange={handleChange}
                            value={searchFilters.ingredient}
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="category"
                            className="block text-white uppercase font-extrabold text-lg"
                            >categoria
                        </label>
                        <select name="category" id="category"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            onChange={handleChange}
                            value={searchFilters.category}
                        >categoria
                            <option value="">-- Seleccione --</option>
                            {//muetro las categorias que me traje de la api
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
