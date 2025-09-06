import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Calendar,
  User,
  Mail,
  Home,
  MessageSquare,
  Send,
  Users,
  MapPin,
  Phone,
  Check,
  AlertCircle,
} from "lucide-react";

export default function ReservaForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_udlojh6",
        "template_tmuyszs",
        form.current,
        "YT3E1nQa1n65085WQ"
      );

      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    name,
    label,
    type = "text",
    icon: Icon,
    placeholder,
    required = true,
    children,
  }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-piedra-800">
        <Icon size={16} className="text-pino-600" />
        {label}
        {required && <span className="text-terracota-500">*</span>}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full border border-arena-300 rounded-xl px-4 py-3 text-sm bg-white/90 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pino-400 focus:border-pino-400 hover:border-pino-300"
        />
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-marfil-50/95 to-nieve-100/95 border border-arena-200 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
      {/* Header colorido */}
      <div className="bg-gradient-to-r from-pino-600 via-pino-500 to-terracota-500 p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Reserva tu Estadía
        </h3>
        <p className="text-white/90 text-sm">
          Completa el formulario y te contactaremos pronto
        </p>
      </div>

      {/* Mensajes de estado */}
      {submitStatus && (
        <div
          className={`p-4 mx-6 mt-4 rounded-xl flex items-center gap-3 ${
            submitStatus === "success"
              ? "bg-pino-50 text-pino-800 border border-pino-200"
              : "bg-terracota-50 text-terracota-800 border border-terracota-200"
          }`}
        >
          {submitStatus === "success" ? (
            <>
              <Check size={20} className="text-pino-600" />
              <div>
                <p className="font-semibold">¡Reserva enviada con éxito!</p>
                <p className="text-xs opacity-80">
                  Te contactaremos pronto para confirmar.
                </p>
              </div>
            </>
          ) : (
            <>
              <AlertCircle size={20} className="text-terracota-600" />
              <div>
                <p className="font-semibold">Error al enviar</p>
                <p className="text-xs opacity-80">
                  Por favor, intenta nuevamente.
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
        {/* Información Personal */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-pino-800 border-b border-arena-200 pb-2">
            Información Personal
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              name="nombre"
              label="Nombre completo"
              icon={User}
              placeholder="Ej. María González"
            />

            <InputField
              name="email"
              label="Correo electrónico"
              type="email"
              icon={Mail}
              placeholder="maria@ejemplo.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              name="telefono"
              label="Teléfono"
              icon={Phone}
              placeholder="+56 9 1234 5678"
            />

            <InputField
              name="procedencia"
              label="Ciudad de origen"
              icon={MapPin}
              placeholder="Ej. Santiago, Chile"
            />
          </div>
        </div>

        {/* Detalles de Reserva */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-pino-800 border-b border-arena-200 pb-2">
            Detalles de la Reserva
          </h4>

          <InputField name="habitacion" label="Tipo de habitación" icon={Home}>
            <select
              name="habitacion"
              required
              className="w-full border border-arena-300 rounded-xl px-4 py-3 text-sm bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pino-400 focus:border-pino-400 hover:border-pino-300"
            >
              <option value="" disabled>
                Selecciona un tipo...
              </option>
              <option value="matrimonial">🛏️ Habitación Matrimonial</option>
              <option value="doble">🛏️ Habitación Doble</option>
              <option value="familiar">🏠 Cabaña Familiar</option>
              <option value="suite">✨ Suite Superior</option>
              <option value="individual">🛏️ Habitación Individual</option>
              <option value="triple">🛏️ Habitación Triple</option>
              <option value="premium">🏘️ Cabaña Premium</option>
              <option value="campestre">🌲 Cabaña Campestre</option>
            </select>
          </InputField>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              name="fecha"
              label="Fecha de llegada"
              type="date"
              icon={Calendar}
            />

            <InputField
              name="salida"
              label="Fecha de salida"
              type="date"
              icon={Calendar}
            />

            <InputField
              name="huespedes"
              label="Número de huéspedes"
              type="number"
              icon={Users}
              placeholder="2"
            />
          </div>

          <InputField
            name="mensaje"
            label="Mensaje adicional"
            icon={MessageSquare}
            required={false}
          >
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Cuéntanos sobre preferencias especiales, alergias, o cualquier solicitud particular..."
              className="w-full border border-arena-300 rounded-xl px-4 py-3 text-sm bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pino-400 focus:border-pino-400 hover:border-pino-300 resize-none"
            />
          </InputField>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting
              ? "bg-piedra-300 text-piedra-600 cursor-not-allowed"
              : "bg-gradient-to-r from-terracota-600 to-terracota-500 text-white hover:shadow-xl hover:from-terracota-700 hover:to-terracota-600 hover:-translate-y-1"
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-piedra-600 border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Reserva
              <Send size={18} />
            </>
          )}
        </button>

        {/* Información de contacto */}
        <div className="text-center pt-4 border-t border-arena-200">
          <p className="text-piedra-600 text-sm mb-2">¿Necesitas ayuda?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="tel:+56123456789"
              className="flex items-center gap-2 text-pino-600 hover:text-pino-700 transition-colors"
            >
              <Phone size={14} />
              +56 123 456 789
            </a>
            <span className="text-arena-400 hidden sm:block">•</span>
            <a
              href="mailto:reservas@hostal.cl"
              className="flex items-center gap-2 text-pino-600 hover:text-pino-700 transition-colors"
            >
              <Mail size={14} />
              reservas@hostal.cl
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
