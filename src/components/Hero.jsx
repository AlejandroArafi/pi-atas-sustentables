import { useState, useEffect } from "react";
import { Star, Gift, Heart, Sparkles } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "¡Piñatas que Hacen Magia!",
      subtitle: "Convierte cualquier celebración en una fiesta inolvidable",
      image:
        "/images/sliderHero/hero1.jpg",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Diseños Únicos y Personalizados",
      subtitle: "Cada piñata es una obra de arte hecha con amor",
      image:
        "/images/sliderHero/hero2.jpg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Calidad Premium Garantizada",
      subtitle: "Materiales resistentes para la diversión más intensa",
      image:
        "/images/sliderHero/hero3.jpg",
      color: "from-green-400 to-blue-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-18 h-18 bg-green-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Confetti pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b9d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-600">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Piñatas Sustentables
                </span>
                <Sparkles className="w-6 h-6" />
              </div>

              <h1
                className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent leading-tight`}
              >
                {slides[currentSlide].title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-gray-600">Piñatas Vendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Diseños Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  document
                    .getElementById("catalogo")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Ver Catálogo
              </button>
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Personalizar
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 de 200+ reseñas</span>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            {/* ajusta el tamaño del slider */}
            <div className="relative w-full aspect-[3/4] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt="Piñata"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].color} opacity-20`}
              ></div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-pink-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
