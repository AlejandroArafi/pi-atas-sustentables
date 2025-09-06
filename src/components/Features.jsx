import { Shield, Truck, Palette, Clock, Award, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Calidad Premium",
      description:
        "Materiales resistentes y seguros para niños. Cada piñata pasa por rigurosos controles de calidad.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Truck,
      title: "Envío Rápido",
      description:
        "Entrega en 24-48 horas en Santiago y regiones. Empaque especial para proteger tu piñata.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Palette,
      title: "Diseño Personalizado",
      description:
        "Creamos la piñata de tus sueños. Cualquier personaje, tema o idea que tengas en mente.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description:
        "Garantizamos que tu piñata llegue a tiempo para la celebración. Nunca fallaremos a tu fiesta.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Award,
      title: "Garantía Total",
      description:
        "Si no quedas 100% satisfecho, te devolvemos tu dinero. Tu sonrisa es nuestra prioridad.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Heart,
      title: "Hecho con Amor",
      description:
        "Cada piñata es creada artesanalmente con dedicación y cariño para hacer feliz a tu familia.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
            <Award className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              ¿Por Qué Elegirnos?
            </span>
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            La Mejor Experiencia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No solo vendemos piñatas, creamos momentos mágicos. Descubre por qué
            miles de familias confían en nosotros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div
                className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 group-hover:w-20 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-purple-100">Piñatas Vendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-purple-100">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24h</div>
              <div className="text-purple-100">Tiempo de Entrega</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">3</div>
              <div className="text-purple-100">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
