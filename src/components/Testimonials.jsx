import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Mamá de Sofía",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "¡Increíble! La piñata de unicornio superó todas mis expectativas. Mi hija quedó fascinada y todos los niños se divirtieron muchísimo. La calidad es excepcional y llegó perfecta.",
      event: "Cumpleaños de 6 años",
    },
    {
      name: "Carlos Rodríguez",
      role: "Papá de Mateo",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Pedimos una piñata personalizada de superhéroes y el resultado fue espectacular. El detalle y la creatividad son impresionantes. Definitivamente volveremos a comprar.",
      event: "Fiesta temática",
    },
    {
      name: "Ana Martínez",
      role: "Organizadora de eventos",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Como organizadora de eventos infantiles, siempre busco la mejor calidad. Estas piñatas son perfectas: resistentes, hermosas y siempre llegan a tiempo. Mis clientes quedan encantados.",
      event: "Eventos corporativos",
    },
    {
      name: "Luis Fernández",
      role: "Abuelo de Valentina",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Quería sorprender a mi nieta y lo logré. La piñata de princesa era exactamente como la había imaginado. El servicio al cliente fue excelente y muy paciente con mis preguntas.",
      event: "Sorpresa especial",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <Star className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Testimonios
            </span>
            <Star className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Familias Felices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué cientos de familias han elegido nuestras piñatas
            para hacer sus celebraciones inolvidables.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 left-6 text-purple-200">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Author info */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {testimonials[currentTestimonial].event}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-purple-500 w-8"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center text-purple-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Calificación promedio</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Reseñas verificadas</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Recomendarían</div>
          </div>
        </div>
      </div>
    </section>
  );
}
