// Import all product images
import TopVenta1 from "@/shop/assets/home/TopVenta1.png";
import TopVenta2 from "@/shop/assets/home/TopVenta2.png";
import TopVenta3 from "@/shop/assets/home/TopVenta3.png";
import TopVenta4 from "@/shop/assets/home/TopVenta4.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Remo low flex",
    price: 35,
    image: TopVenta1,
    category: "Remos",
    description: "Camiseta de algodón premium con diseño minimalista inspirado en Tesla.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris"]
  },
  {
    id: "2",
    name: "Remo low flex",
    price: 85,
    image: TopVenta2,
    category: "Remos",
    description: "....",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanco", "Negro", "Gris"]
  },
  {
    id: "3",
    name: "tabla",
    price: 75,
    image: TopVenta3,
    category: "Tablas",
    description: "....",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gris", "Negro", "Azul Marino"]
  },
    {
    id: "4",
    name: "Remo Medium Flex",
    price: 75,
    image: TopVenta4,
    category: "Remos",
    description: ".....",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gris", "Negro", "Azul Marino"]
  },
];