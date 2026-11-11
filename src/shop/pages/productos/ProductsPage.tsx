import { products } from '@/mocks/products.mock'
import { CustomCategorias } from '@/shop/Components/CustomCategorias'
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron'
import { ProductsGrid } from '@/shop/Components/ProductsGrid'
import { categorias, type Categoria } from '@/mocks/categorias.mock';
import { useState } from 'react'

export const ProductsPage = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] =
        useState<Categoria | null>(categorias[0] ?? null)

    const productosFiltrados = categoriaSeleccionada
        ? products.filter(
            (product) => product.category === categoriaSeleccionada.name
        )
        : products

    return (
        <>
            <CustomJumbotron title={categoriaSeleccionada?.name ?? 'Todos los productos'} />
            <CustomCategorias categorias={categorias} onSelectCategory={setCategoriaSeleccionada} />
            <ProductsGrid products={productosFiltrados} />
            
        </>
    )
}
