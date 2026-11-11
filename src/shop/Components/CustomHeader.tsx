import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import { cn } from "cn";
import logo from "./../../assets/Logo.png";

export const CustomHeader = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuAbierto, setMenuAbierto] = useState(false);
  console.log(currentPath)
  const handleSeach = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key != 'Enter') return;
    const query = inputRef.current?.value;
    const newSearchParams = new URLSearchParams();

    if (!query) {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', inputRef.current!.value);
    }
    setSearchParams(newSearchParams);
  }

  return <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Powerblade"
          className="w-24 sm:w-28 md:w-36"
        />
        {/* Navigation - Desktop */}
        <nav className="font-montserrat hidden md:flex items-center space-x-8">
          <Link to="/" className={cn(`text-sm font-medium transition-colors hover:text-primary`,
            currentPath === "/" && "underline underline-offset-4"
          )}>
            Home
          </Link>
          <Link to="/products" className={cn(`text-sm font-medium transition-colors hover:text-primary`, currentPath.startsWith("/products") && "underline underline-offset-4"
          )}>
            Productos
          </Link>
          <Link to="/gender/women" className={cn(`text-sm font-medium transition-colors hover:text-primary`
          )}>
            Quiénes Somos
          </Link>
          <Link to="/gender/kid" className={cn(`text-sm font-medium transition-colors hover:text-primary`
          )}>
            Contacto
          </Link>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input ref={inputRef} placeholder="Buscar productos..." className="pl-9 w-64 h-9 bg-white" onKeyDown={handleSeach} />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        {/* Botón hamburguesa: solo móvil */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-200 transition-colors"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Menú desplegable móvil */}
      {menuAbierto && (
        <nav className="md:hidden font-montserrat flex flex-col gap-1 pb-4 pt-2">
          <Link
            to="/"
            onClick={() => setMenuAbierto(false)}
            className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
          >
            Inicio
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuAbierto(false)}
            className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
          >
            Productos
          </Link>

          <Link
            to="/quienesSomos"
            onClick={() => setMenuAbierto(false)}
            className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
          >
            Quienes Somos
          </Link>
          <Link
            to="/contacto"
            onClick={() => setMenuAbierto(false)}
            className="rounded-md px-3 py-3 text-sm font-medium hover:bg-slate-200"
          >
            Contacto
          </Link>
        </nav>
      )}
    </div>
  </header>;
};
