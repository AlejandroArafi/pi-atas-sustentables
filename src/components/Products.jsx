import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [activePrice, setActivePrice] = useState("todos");

  // Botones de filtro por precio
  const prices = [
    { id: "todos", label: "Todos" },
    { id: "20000", label: "$20.000" },
    { id: "22000", label: "$22.000" },
    { id: "25000", label: "$25.000" },
    { id: "34990", label: "$34.990" },
  ];

  // Productos de ejemplo
  const products = [
  { id: 1, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/1.jpg", rating: 4.8, reviews: 25 },
    { id: 2, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/2.jpg", rating: 5.0, reviews: 32 },
    { id: 3, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/3.jpg", rating: 4.9, reviews: 40 },
    { id: 4, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/4.jpg", rating: 4.7, reviews: 18 },
    { id: 5, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/5.jpg", rating: 4.6, reviews: 22 },
    { id: 6, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/6.jpg", rating: 4.9, reviews: 30 },
    { id: 7, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/7.jpg", rating: 5.0, reviews: 27 },
    { id: 8, name: "Piñata Simple Colores", price: 20000, image: "/images/20mil/8.jpg", rating: 4.8, reviews: 35 },
    { id: 9, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/1.jpg", rating: 4.9, reviews: 28 },
    { id: 10, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/2.jpg", rating: 4.7, reviews: 20 },
    { id: 11, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/3.jpg", rating: 4.8, reviews: 24 },
    { id: 12, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/4.jpg", rating: 5.0, reviews: 31 },
    { id: 13, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/5.jpg", rating: 4.6, reviews: 19 },
    { id: 14, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/6.jpg", rating: 4.9, reviews: 26 },
    { id: 15, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/7.jpg", rating: 4.8, reviews: 23 },
    { id: 16, name: "Piñata Monito + Logo", price: 22000, image: "/images/22mil/8.jpg", rating: 5.0, reviews: 29 },
    { id: 17, name: "Piñata Temática", price: 25000, image: "/images/25mil/1.jpg", rating: 4.9, reviews: 34 },
    { id: 18, name: "Piñata Temática", price: 25000, image: "/images/25mil/2.jpg", rating: 4.7, reviews: 21 },
    { id: 19, name: "Piñata Temática", price: 25000, image: "/images/25mil/3.jpg", rating: 4.8, reviews: 27 },
    { id: 20, name: "Piñata Temática", price: 25000, image: "/images/25mil/4.jpg", rating: 5.0, reviews: 33 },
    { id: 21, name: "Piñata Temática", price: 25000, image: "/images/25mil/5.jpg", rating: 4.6, reviews: 20 },
    { id: 22, name: "Piñata Temática", price: 25000, image: "/images/25mil/6.jpg", rating: 4.9, reviews: 28 },
    { id: 23, name: "Piñata Temática", price: 25000, image: "/images/25mil/7.jpg", rating: 4.8, reviews: 25 },
    { id: 24, name: "Piñata Temática", price: 25000, image: "/images/25mil/8.jpg", rating: 5.0, reviews: 30 },
    { id: 25, name: "Piñata Premium", price: 30000, image: "/images/30mil/1.jpg", rating: 4.9, reviews: 36 },
    { id: 26, name: "Piñata Premium", price: 30000, image: "/images/30mil/2.jpg", rating: 4.7, reviews: 32 },
    { id: 27, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/1.jpg", rating: 5.0, reviews: 45 },
    { id: 28, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/2.jpg", rating: 4.9, reviews: 38 },
    { id: 29, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/3.jpg", rating: 4.8, reviews: 29 },
    { id: 30, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/4.jpg", rating: 5.0, reviews: 41 },
    { id: 31, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/5.jpg", rating: 4.7, reviews: 33 },
    { id: 32, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/6.jpg", rating: 4.9, reviews: 37 },
    { id: 33, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/7.jpg", rating: 4.8, reviews: 30 },
    // { id: 34, name: "Piñata 100% Sustentable", price: 34990, image: "/images/34mil/8.jpg", rating: 5.0, reviews: 42 },

    // ... los demás 22 productos
  ];

  // Filtrar productos según el precio activo
  const filteredProducts =
    activePrice === "todos"
      ? products
      : products.filter((p) => Number(p.price) === Number(activePrice));

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-700 mb-4">
            Nuestras Piñatas
          </h2>
          <p className="text-gray-600">
            Elige tu piñata ideal según el precio.
          </p>
        </div>

        {/* Filtros por precio */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {prices.map((price) => (
            <button
              key={price.id}
              onClick={() => setActivePrice(price.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activePrice === price.id
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300"
              }`}
            >
              {price.label}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform duration-300 ease-out hover:-translate-y-1 overflow-hidden"
            >
              {/* Imagen */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <span className="text-2xl font-bold text-purple-600">
                    ${product.price.toLocaleString("es-CL")}
                  </span>
                </div>

                {/* Botón */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
