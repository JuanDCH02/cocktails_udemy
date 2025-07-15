import {lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IndexPage } from "./pages/IndexPage"
import { Layout } from "./layouts/Layout"

//hago el lazyload de la pagina de favoritos(mejora performance)
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            {/*elemento que se renderiza en ambas rutas */}
            <Route element={<Layout />}>
                <Route path="/" element={<IndexPage/>} index />
                <Route path="/favorites" element={
                  <Suspense fallback='cargando...'>
                    <FavoritesPage/>
                  </Suspense>     
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
  ) 
}
