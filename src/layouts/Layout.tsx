import { Header } from '../components/Header'
import {Outlet} from 'react-router-dom'
import Modal from '../components/Modal'
import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'
import Notification from '../components/Notification'
 
export const Layout = () => {
    const {loadFromStorage} = useAppStore()

    {/* cuando se renderice mi app busca si hay favoritos guardados en localStorage*/}
    useEffect(() => {
        loadFromStorage()
    }, [loadFromStorage])
    return (
        <>
        {/* componentes a renderizar en distintas paginas*/}
            <Header/>
            <main className='container mx-auto py-16'>
                <Outlet />
            </main>
            <Modal/>
            <Notification/>
        </>
    )
}
 