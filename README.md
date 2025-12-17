# 🛒 MarketHub

![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-cyan)
![Status](https://img.shields.io/badge/Status-Finalizado-green)

**MarketHub** es una plataforma de **comercio electrónico (Marketplace)** moderna, desarrollada con la plataforma _**"Lovable"**_ usando **React** y **Vite**, diseñada para permitir a los usuarios comprar y vender productos únicos de manera fácil y segura. Integra una interfaz elegante con **Shadcn UI** y gestión de estado global.

El sistema implementa **catálogo de productos**, **carrito de compras**, **publicación de artículos**, **filtrado avanzado** y un diseño totalmente **responsivo**.

## Información del proyecto

- _**Prueba** de la **aplicación** "Lovable"._
- _**Prueba** de la **IA** para Diseño y Creación Web._

### Result

**URL**: https://market-hub-mocha.vercel.app

---

## 📌 Tabla de Contenidos
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## ✨ Características

### 🛍️ Marketplace Completo
- Página de inicio con secciones Hero, beneficios y categorías destacadas (`Index.tsx`).
- Navegación fluida entre compra y venta.

### 🔍 Exploración y Filtros
- Catálogo robusto (`Products.tsx`) con múltiples opciones de visualización.
- **Sistema de filtrado avanzado**: Categoría, rango de precios, stock disponible y ordenamiento (precio/valoración).
- Barra lateral de filtros responsiva (Sheet en móviles).

### 📦 Gestión de Ventas
- Formulario intuitivo para publicar artículos (`Sell.tsx`).
- Carga de imágenes (hasta 5 fotos) con previsualización.
- Gestión de inventario y categorización de productos.

### 🛒 Carrito de Compras
- Gestión de estado del carrito en tiempo real (`CartContext.tsx`).
- Cálculo automático de totales y costos de envío (Gratis > $50).
- Persistencia de artículos y resumen de pedido (`Cart.tsx`).

### 👤 Autenticación y UI
- Interfaz de Login y Registro (`Auth.tsx`) con validaciones visuales.
- Diseño responsivo adaptado a móviles y escritorio.
- Componentes reutilizables basados en **Shadcn UI**.
- Notificaciones Toast (Sonner) para feedback del usuario.

---

## 🧰 Tecnologías
- **Core:** React 18, TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS, Tailwind Animate
- **Componentes UI:** Shadcn UI (Radix Primitives)
- **Estado & Datos:** TanStack Query, React Context
- **Enrutamiento:** React Router Dom
- **Formularios:** React Hook Form, Zod
- **Gráficos:** Recharts
- **Iconos:** Lucide React

---

## 🚀 Instalación

### 🔹 Prerrequisitos
- Node.js (v18 o superior recomendado)
- npm (o bun/yarn)
- Git

##

### 1️⃣ Clonar el repositorio
```
git clone [https://github.com/yamil-lara/market-hub.git](https://github.com/yamil-lara/market-hub.git)
cd market-hub
```

##

### 2️⃣ Instalar dependencias
* Windows / Linux / Mac
```
npm install
```

##

### 3️⃣ Configuración
El proyecto actualmente utiliza datos estáticos (`src/data/products.ts`) y simulación de autenticación, por lo que no requiere configuración compleja de variables de entorno iniciales.

##

### 4️⃣ Ejecutar el servidor de desarrollo
```
npm run dev
```
* Acceso Local:
```
http://localhost:5173
```

##

### 5️⃣ Ejecutar el servidor de desarrollo
```
npm run build
```

---

### 📂 Estructura del Proyecto
```bash
market-hub/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── layout/         # Header, Footer
│   │   ├── products/       # ProductCard
│   │   └── ui/             # Componentes base (Shadcn: Button, Input, Sheet...)
│   ├── contexts/           # Estado global (CartContext)
│   ├── data/               # Datos estáticos (products.ts)
│   ├── hooks/              # Custom Hooks (use-mobile, use-toast)
│   ├── lib/                # Utilidades (utils.ts)
│   ├── pages/              # Vistas principales
│   │   ├── Auth.tsx        # Login/Registro
│   │   ├── Cart.tsx        # Carrito
│   │   ├── Index.tsx       # Landing Page
│   │   ├── Products.tsx    # Catálogo
│   │   ├── ProductDetail.tsx
│   │   └── Sell.tsx        # Publicar producto
│   ├── App.tsx             # Rutas
│   └── main.tsx            # Punto de entrada
│
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

### ⚙️ Configuraciones Importantes
### 🗄 Base de Datos (MongoDB)
El sistema utiliza `Motor` para conexiones asíncronas. Asegúrate de que tu `MONGO_URL` en el `.env` tenga permisos de lectura/escritura.
### 🎨 Frontend UI
El frontend utiliza Tailwind CSS y componentes de Radix UI. Puedes personalizar los temas en `frontend/src/index.css` y `tailwind.config.js`.

---

### 🤝 Contribución
1. Fork del proyecto
2. Crear rama:
```bash
git checkout -b feature/NuevaFuncionalidad
```
3. Commit:
```bash
git commit -m "Añadir nueva funcionalidad"
```
4. Push:
```bash
git push origin feature/NuevaFuncionalidad
```
5. Abrir Pull Request

---

### 📄 Licencia
Este proyecto se distribuye bajo la Licencia de [Lovable](https://docs.lovable.dev/introduction/welcome).

---

### 📞 Contacto
Desarrollado por [ [Yamil Lara](https://yamil-lara.github.io) / [Lovable](https://docs.lovable.dev/introduction/welcome) ]
