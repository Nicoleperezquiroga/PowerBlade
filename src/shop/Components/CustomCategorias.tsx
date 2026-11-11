import { type Categoria } from '@/mocks/categorias.mock';
import { Link } from 'react-router';

interface Props {
  categorias: Categoria[]
  onSelectCategory: (categoria: Categoria) => void
}
export const CustomCategorias = ({ categorias, onSelectCategory }: Props) => {
  return (
    <div className='flex justify-center'>
      <div className="max-w-full grid grid-cols-4 gap-4">
        {categorias.map((cat) => (
          <Link to="/products">
            <div key={cat.id} className="flex flex-col items-center justify-center cursor-pointer">
              <img
                src={cat.image}
                onClick={() => onSelectCategory(cat)}
                alt="Powerblade"
                className="w-20 sm:w-24 md:w-32 h-auto object-contain"
              />
              <p>{cat.name}</p>
            </div>
          </Link>

        ))}
      </div>
    </div>

  )
}
