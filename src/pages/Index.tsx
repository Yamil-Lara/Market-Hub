import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
          <div className="container py-20 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Compra y vende de forma{" "}
                <span className="text-primary">fácil y segura</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Descubre miles de productos únicos de vendedores verificados o comienza a vender tus propios artículos hoy mismo.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/products">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explorar productos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/sell">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Comenzar a vender
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y bg-muted/30">
          <div className="container py-12">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Envío rápido</h3>
                  <p className="text-sm text-muted-foreground">Entrega en 24-48h</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Compra segura</h3>
                  <p className="text-sm text-muted-foreground">Pagos protegidos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Fácil devolución</h3>
                  <p className="text-sm text-muted-foreground">30 días de garantía</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Categorías</h2>
            <Link to="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group flex flex-col items-center gap-2 rounded-lg border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="text-4xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Productos destacados</h2>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                seller={product.seller}
                inStock={product.inStock}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">¿Tienes algo que vender?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Únete a miles de vendedores y comienza a ganar dinero con tus productos hoy mismo.
              </p>
              <Link to="/sell">
                <Button size="lg" variant="secondary" className="mt-8">
                  Publicar mi primer artículo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
