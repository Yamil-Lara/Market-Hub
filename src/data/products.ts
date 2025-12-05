export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  seller: string;
  sellerId: string;
  inStock: boolean;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
}

export const categories = [
  { id: "electronics", name: "Electrónica", icon: "💻" },
  { id: "fashion", name: "Moda", icon: "👕" },
  { id: "home", name: "Hogar", icon: "🏠" },
  { id: "sports", name: "Deportes", icon: "⚽" },
  { id: "books", name: "Libros", icon: "📚" },
  { id: "toys", name: "Juguetes", icon: "🎮" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Auriculares Bluetooth Premium",
    description: "Auriculares inalámbricos con cancelación de ruido activa, batería de larga duración y sonido de alta fidelidad. Perfectos para música, podcasts y llamadas.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
    category: "Electrónica",
    seller: "TechStore",
    sellerId: "seller1",
    inStock: true,
    stock: 25,
    rating: 4.8,
    reviews: 124,
    features: ["Cancelación de ruido", "40h de batería", "Bluetooth 5.0", "Plegables"],
  },
  {
    id: "2",
    name: "Cámara Vintage Instantánea",
    description: "Cámara instantánea estilo retro con flash integrado. Imprime fotos al instante y crea recuerdos únicos.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    ],
    category: "Electrónica",
    seller: "PhotoWorld",
    sellerId: "seller2",
    inStock: true,
    stock: 15,
    rating: 4.5,
    reviews: 89,
    features: ["Impresión instantánea", "Flash integrado", "Diseño retro", "Fácil de usar"],
  },
  {
    id: "3",
    name: "Reloj Smartwatch Deportivo",
    description: "Smartwatch resistente al agua con GPS, monitor de ritmo cardíaco y más de 100 modos deportivos.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    ],
    category: "Deportes",
    seller: "FitGear",
    sellerId: "seller3",
    inStock: true,
    stock: 30,
    rating: 4.7,
    reviews: 256,
    features: ["GPS integrado", "Monitor cardíaco", "Resistente al agua", "7 días de batería"],
  },
  {
    id: "4",
    name: "Zapatillas Running Pro",
    description: "Zapatillas de running con tecnología de amortiguación avanzada y diseño aerodinámico.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    ],
    category: "Deportes",
    seller: "SportMax",
    sellerId: "seller4",
    inStock: true,
    stock: 50,
    rating: 4.6,
    reviews: 178,
    features: ["Amortiguación premium", "Ligeras", "Transpirables", "Suela antideslizante"],
  },
  {
    id: "5",
    name: "Lámpara de Diseño Moderno",
    description: "Lámpara de mesa con diseño minimalista y luz LED regulable. Perfecta para cualquier espacio.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    ],
    category: "Hogar",
    seller: "HomeDecor",
    sellerId: "seller5",
    inStock: true,
    stock: 20,
    rating: 4.4,
    reviews: 67,
    features: ["LED regulable", "Diseño minimalista", "Bajo consumo", "Touch control"],
  },
  {
    id: "6",
    name: "Bolso de Cuero Artesanal",
    description: "Bolso hecho a mano con cuero genuino de alta calidad. Diseño elegante y atemporal.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    ],
    category: "Moda",
    seller: "LeatherCraft",
    sellerId: "seller6",
    inStock: true,
    stock: 10,
    rating: 4.9,
    reviews: 45,
    features: ["Cuero genuino", "Hecho a mano", "Múltiples compartimentos", "Correa ajustable"],
  },
  {
    id: "7",
    name: "Planta Decorativa con Maceta",
    description: "Planta artificial de alta calidad con maceta de cerámica. Sin mantenimiento y siempre verde.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    ],
    category: "Hogar",
    seller: "GreenSpace",
    sellerId: "seller7",
    inStock: true,
    stock: 40,
    rating: 4.3,
    reviews: 92,
    features: ["Alta calidad", "Sin mantenimiento", "Maceta incluida", "Aspecto natural"],
  },
  {
    id: "8",
    name: "Teclado Mecánico RGB",
    description: "Teclado gaming mecánico con switches Cherry MX e iluminación RGB personalizable.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    ],
    category: "Electrónica",
    seller: "GamerZone",
    sellerId: "seller8",
    inStock: false,
    stock: 0,
    rating: 4.8,
    reviews: 312,
    features: ["Switches Cherry MX", "RGB personalizable", "Reposamuñecas", "Cable trenzado"],
  },
];
