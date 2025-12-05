import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { categories, products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const getCategoryProductCount = (categoryName: string) => {
    return products.filter((p) => p.category === categoryName).length;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold">Categorías</h1>
          <p className="mt-2 text-muted-foreground">
            Explora productos por categoría
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/products?category=${category.id}`}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-4xl transition-transform group-hover:scale-110">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {getCategoryProductCount(category.name)} productos
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
