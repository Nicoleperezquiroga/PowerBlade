import { CustomLogo } from '@/components/custom/CustomLogo'
import React from 'react'

export const CustomFooter = () => {
  return (
    <div>
              {/* Footer */}
      <footer className="font-montserrat border-t py-12 px-4 lg:px-8 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <CustomLogo/>
              <p className="text-sm text-muted-foreground">
                Descripción de productos.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Remos</a></li>
                <li><a href="#" className="hover:text-foreground">Cascos</a></li>
                <li><a href="#" className="hover:text-foreground">Skates</a></li>
                <li><a href="#" className="hover:text-foreground">Tablas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground">Envíos</a></li>
                <li><a href="#" className="hover:text-foreground">.....</a></li>
                <li><a href="#" className="hover:text-foreground">....</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-foreground">.....</a></li>
                <li><a href="#" className="hover:text-foreground">....</a></li>
                <li><a href="#" className="hover:text-foreground">.....</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
