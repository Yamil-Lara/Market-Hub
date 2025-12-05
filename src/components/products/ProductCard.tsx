import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  inStock?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  seller,
  inStock = true,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image, seller });
    toast.success("Añadido al carrito", {
      description: name,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 bg-background/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toast.success("Añadido a favoritos");
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          {!inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <Badge variant="secondary">Agotado</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <h3 className="line-clamp-1 font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{seller}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Añadir
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
