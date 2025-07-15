import type { StateCreator } from "zustand"; 
import type { Recipe } from "../types";
import { createNotificationsSlice, type NotificationsSliceType } from "./notificationsSlice";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleFavorites: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

//modifico mi slice para consumir uno dentro de otro y poder usar las notificaciones desde aqui
export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationsSliceType, [], [],
    FavoritesSliceType> = (set, get, api ) =>({
    favorites: [],
    handleFavorites: (recipe)=>{
        //compruebo si la receta que me llega ya existe en mi listado de favoritos
        if(get().favoriteExists(recipe.idDrink)){
            //si existe lo saco de mi array
            set({
                favorites: [...get().favorites.filter(fav => fav.idDrink !== recipe.idDrink)]
            })
            createNotificationsSlice(set,get,api).showNotification({
                text:'se eliminó de favoritos', 
                error:false
            })
        }else{
            //si no existe lo agrego al array
            set({
                favorites: [...get().favorites, recipe]
            })
            createNotificationsSlice(set,get,api).showNotification({
                text:'se agregó de favoritos', 
                error:false
            })
        }
        //despues de guardar o eliminar guardo en localstorage
        localStorage.setItem('favorites',JSON.stringify(get().favorites) )
    },
    favoriteExists: (id) => {
        //retorno si cierta receta existe en mis favoritos
        return get().favorites.some(fav => fav.idDrink === id)
    },
    loadFromStorage: () => {
        const storaged = localStorage.getItem('favorites')
        if(storaged){
            set({favorites:JSON.parse(storaged)})
        }
    }
})