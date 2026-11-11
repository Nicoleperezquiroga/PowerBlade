// Import all product images
import catRemos from "@/shop/assets/home/CatRemo.png";
import catCascos from "@/shop/assets/home/CatCasco.png";
import catSkates from "@/shop/assets/home/CatSkate.png";
import catTablas from "@/shop/assets/home/CatTablas.png";

export interface Categoria {
  id: string;
  name: string;
  image: string;
  habilitado: boolean;
}

export const categorias: Categoria[] = [
  {
    id: "1",
    name: "Remos",
    image: catRemos,
    habilitado: true,
  },
  {
    id: "2",
    name: "Cascos",
    image: catCascos,
    habilitado: true,
  },
    {
    id: "3",
    name: "Skates",
    image: catSkates,
    habilitado: true,
  },
      {
    id: "4",
    name: "Tablas",
    image: catTablas,
    habilitado: true,
  },
];