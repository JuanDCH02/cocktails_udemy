import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IndexPage } from "./pages/IndexPage"
import { FavoritesPage } from "./pages/Favoritespage"
import { Layout } from "./layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            {/*elemento que se renderiza en ambas rutas */}
            <Route element={<Layout />}>
                <Route path="/" element={<IndexPage/>} index />
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  ) 
}
