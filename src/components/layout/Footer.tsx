import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">MarketHub</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Tu marketplace de confianza para comprar y vender productos únicos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Comprar</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground">Todos los productos</Link></li>
              <li><Link to="/categories" className="hover:text-foreground">Categorías</Link></li>
              <li><Link to="/deals" className="hover:text-foreground">Ofertas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Vender</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sell" className="hover:text-foreground">Comenzar a vender</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Panel de vendedor</Link></li>
              <li><Link to="/help" className="hover:text-foreground">Centro de ayuda</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Soporte</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contacto</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">Preguntas frecuentes</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 MarketHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
