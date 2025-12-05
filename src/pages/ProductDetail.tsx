import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Share2, ChevronRight, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Producto no encontrado</h1>
            <Link to="/products">
              <Button className="mt-4">Volver a productos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        seller: product.seller,
      });
    }
    toast.success("Añadido al carrito", {
      description: `${quantity}x ${product.name}`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-foreground">Productos</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square w-20 overflow-hidden rounded-md border-2 ${
                        selectedImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="outline">{product.category}</Badge>
              <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Vendido por <span className="font-medium text-foreground">{product.seller}</span>
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
              </div>

              <Separator className="my-6" />

              <p className="text-muted-foreground">{product.description}</p>

              {product.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold">Características:</h3>
                  <ul className="mt-2 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Separator className="my-6" />

              {/* Stock & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      En stock ({product.stock} disponibles)
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Agotado</Badge>
                  )}
                </div>

                {product.inStock && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center rounded-md border">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Añadir al carrito
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 grid gap-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Envío gratis</p>
                    <p className="text-sm text-muted-foreground">En pedidos superiores a $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Compra segura</p>
                    <p className="text-sm text-muted-foreground">Pagos encriptados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Devoluciones fáciles</p>
                    <p className="text-sm text-muted-foreground">30 días para devolver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
