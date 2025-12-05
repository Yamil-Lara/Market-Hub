import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all") {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category && product.category !== category.name) return false;
    }
    if (inStockOnly && !product.inStock) return false;
    if (priceRange.min && product.price < Number(priceRange.min)) return false;
    if (priceRange.max && product.price > Number(priceRange.max)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Categoría</Label>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="all"
              checked={selectedCategory === "all"}
              onCheckedChange={() => setSelectedCategory("all")}
            />
            <Label htmlFor="all" className="font-normal">Todas</Label>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={category.id}
                checked={selectedCategory === category.id}
                onCheckedChange={() => setSelectedCategory(category.id)}
              />
              <Label htmlFor={category.id} className="font-normal">
                {category.icon} {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold">Precio</Label>
        <div className="mt-3 flex gap-2">
          <Input
            type="number"
            placeholder="Mín"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Máx"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="inStock"
          checked={inStockOnly}
          onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
        />
        <Label htmlFor="inStock" className="font-normal">Solo disponibles</Label>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Productos</h1>
              <p className="mt-1 text-muted-foreground">
                {sortedProducts.length} productos encontrados
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="mt-8 flex gap-8">
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Filter className="h-5 w-5" />
                  Filtros
                </div>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </div>
            </aside>

            <div className="flex-1">
              {sortedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-lg font-medium">No se encontraron productos</p>
                  <p className="mt-1 text-muted-foreground">
                    Intenta ajustar los filtros de búsqueda
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sortedProducts.map((product) => (
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
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
