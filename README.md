# Bebidas - Buscador de Recetas de Cocteles

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript**, **Zustand** y **Vite**. Permite buscar recetas de cocteles por ingrediente y categoría, ver los detalles de cada bebida y guardar tus favoritas.

## Características

- **Búsqueda de recetas:** Filtra cocteles por ingrediente y categoría usando datos de [TheCocktailDB](https://www.thecocktaildb.com/).
- **Listado de resultados:** Muestra las bebidas encontradas en una cuadrícula con imagen y nombre.
- **Detalle de receta:** Al seleccionar una bebida, se abre un modal con la receta completa, ingredientes y medidas.
- **Favoritos:** Puedes agregar o quitar bebidas de tus favoritos, que se guardan en el localStorage.
- **Notificaciones:** La app muestra mensajes de confirmación o error en acciones importantes.
- **Navegación:** Utiliza React Router para navegar entre la página principal y la de favoritos.
- **Diseño responsivo:** Interfaz moderna y adaptable gracias a TailwindCSS.

## Tecnologías

- [React]
- [TypeScript]
- [Zustand]
- [Vite]
- [TailwindCSS]
- [React Router]

## Uso

- En la página principal puedes buscar recetas por ingrediente y categoría.
- Haz clic en una bebida para ver los detalles y agregarla a favoritos.
- Accede a la sección "Favoritos" para ver tus bebidas guardadas.

## Estructura del proyecto

- `src/pages`: Páginas principales (`IndexPage`, `FavoritesPage`)
- `src/components`: Componentes reutilizables (cards, modal, notificaciones)
- `src/stores`: Estado global con Zustand
- `src/services`: Lógica para consumir la API
- `src/layouts`: Layout principal con navegación y modal
