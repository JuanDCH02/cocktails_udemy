import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { Recipe } from '../types';

export default function Modal() {
    
    const {modal, closeModal, selectedRecipe, handleFavorites, favoriteExists} = useAppStore()

    const renderIngredients = () => {
        const ingredients : JSX.Element[] = []
        for(let i = 1; i < 6; i++){
            //uso keyof para indicar que usa una llave de algun type que ya tengo
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]
            //si tengo ambos elementos los agrego a una lista
            if( ingredient && measure) {
                ingredients.push(
                    <li
                        key={i}
                        className='text-lg font-normal'>
                        {`${ingredient} - ${measure}`}
                    </li>   
                )
            }
        }
        return ingredients
    }

    return (
      
    <>
        <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {closeModal()}}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/65" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"  
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                        {/* MOSTRANDO EL NOMBRE TRAGO */}
                        <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                            {selectedRecipe.strDrink}
                        </DialogTitle>

                        {/* MOSTRANDO LA IAMGEN DEL TRAGO */}
                        <img src={selectedRecipe.strDrinkThumb} alt={`imagen de: ${selectedRecipe.strDrink}`}
                            className='mx-auto w-96'
                        />

                        {/* MOSTRANDO LOS INGREDSIENTES DEL TRAGO */}
                        <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Ingredientes y Cantidades
                        </DialogTitle>
                        {renderIngredients()}

                        {/* MOSTRANDO LAS INSTRCCIONES DEL TRAGO */}
                        <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Instrucciones
                        </DialogTitle>
                        <p className='text-lg'>
                            {selectedRecipe.strInstructions}
                        </p>

                        {/* BOTONES DE ACCIONES */}
                        <div className='mt-5 flex justify-between gap-4'>
                            <button className='w-full rounded bg-gray-600 p-3 font-bold 
                                upercase text-white hover:bg-gray-500'
                                type='button'
                                onClick={closeModal}
                                >cerrar
                            </button>

                            <button className='w-full rounded bg-orange-600 p-3 font-bold 
                                upercase text-white hover:bg-orange-500'
                                type='button'
                                onClick={() => { handleFavorites(selectedRecipe); closeModal() }}
                                >{favoriteExists(selectedRecipe.idDrink)? 'Eliminar de Favoritos':
                                'Agregar a Favoritos'}
                            </button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
        </Transition>
    </>
    )
}