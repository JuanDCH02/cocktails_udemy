import { Header } from '../components/Header'
import {Outlet} from 'react-router-dom'
 
export const Layout = () => {
    return (
        <>
            <Header/>{/* componente a renderizar en distintas paginas*/}
            <main className='container mx-auto py-16'>
                <Outlet />
            </main>
        </>
    )
}
 