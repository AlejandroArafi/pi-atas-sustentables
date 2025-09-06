import { useState } from "react";
import { Star, Heart, ShoppingCart, Zap } from "lucide-react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("todas");

  const categories = [
    {
      id: "todas",
      name: "Todas",
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      id: "cumpleanos",
      name: "Cumpleaños",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      id: "tematicas",
      name: "Temáticas",
      color: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      id: "personalizadas",
      name: "Personalizadas",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Piñata Unicornio Mágico",
      price: "$25.990",
      originalPrice: "$32.990",
      image:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "cumpleanos",
      rating: 4.9,
      reviews: 45,
      badge: "Más Vendida",
      badgeColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Piñata Superhéroe Personalizada",
      price: "$35.990",
      originalPrice: "$42.990",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "tematicas",
      rating: 5.0,
      reviews: 32,
      badge: "Premium",
      badgeColor: "bg-purple-500",
    },
    {
      id: 3,
      name: "Piñata Princesa Encantada",
      price: "$28.990",
      originalPrice: "$35.990",
      image:
        "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "cumpleanos",
      rating: 4.8,
      reviews: 67,
      badge: "Oferta",
      badgeColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Piñata Dinosaurio Rex",
      price: "$30.990",
      originalPrice: "$38.990",
      image:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "tematicas",
      rating: 4.9,
      reviews: 28,
      badge: "Nuevo",
      badgeColor: "bg-green-500",
    },
    {
      id: 5,
      name: "Piñata Personalizada Tu Diseño",
      price: "$45.990",
      originalPrice: "$55.990",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "personalizadas",
      rating: 5.0,
      reviews: 15,
      badge: "Exclusiva",
      badgeColor: "bg-yellow-500",
    },
    {
      id: 6,
      name: "Piñata Arcoíris Gigante",
      price: "$38.990",
      originalPrice: "$45.990",
      image:
        "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "cumpleanos",
      rating: 4.7,
      reviews: 52,
      badge: "Grande",
      badgeColor: "bg-blue-500",
    },
  ];

  const filteredProducts =
    activeCategory === "todas"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <Zap className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Nuestros Productos
            </span>
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Piñatas Increíbles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra colección de piñatas únicas, diseñadas para hacer
            de tu celebración un momento mágico e inolvidable.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Badge */}
              <div
                className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}
              >
                {product.badge}
              </div>

              {/* Heart Icon */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors z-10">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
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
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
}
