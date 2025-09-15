import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform duration-300 ease-out hover:-translate-y-1 overflow-hidden">
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
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

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
          <span className="text-sm text-gray-500">({product.reviews})</span>
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
  );
}
