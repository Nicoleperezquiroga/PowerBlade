import { CustomCategorias } from "@/shop/Components/CustomCategorias"
import { CustomJumbotron } from "@/shop/Components/CustomJumbotron"
import { ImagenesInicio } from "@/shop/Components/ImagenesInicio"
import { SlideInicio } from "@/shop/Components/SlideInicio"
import { TopVentasGrid } from "@/shop/Components/TopVentasGrid"
import { categorias, type Categoria } from '@/mocks/categorias.mock';
import { useState } from "react"

export const HomePage = () => {
      const [categoriaSeleccionada, setCategoriaSeleccionada] =
      useState<Categoria | null>(categorias[0] ?? null)
        
    return (
        <>
            <SlideInicio title="Todos lo que necesitas" />
            <CustomJumbotron title="Categorías de Productos" subTitle="Busca lo que necesitas aquí"/>
            <CustomCategorias categorias={categorias} onSelectCategory={setCategoriaSeleccionada}/>
            <CustomJumbotron title="Top Ventas" subTitle="Lo que más llevan"/>
            <TopVentasGrid/>
            <ImagenesInicio/>
        </>
    )
}