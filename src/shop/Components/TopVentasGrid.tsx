import ProductCard from './ProductCard'
import { products } from "@/mocks/products.mock"

export const TopVentasGrid = () => {
  return (
    <div className='px-10 lg:px-40'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4">
        {products.map((producto) => (
            <ProductCard id={producto.id} name={producto.name} price={producto.price} image={producto.image} category={producto.category}/>
        ))}
        </div>
    </div>
  )
}
