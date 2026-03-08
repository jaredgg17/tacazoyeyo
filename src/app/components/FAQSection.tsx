import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué incluye el paquete de taquiza?",
    a: "Nuestros paquetes incluyen carne al gusto (pastor, chuleta o bistec), salsa verde, salsa mexicana,  desechables completos, tortillas, limones, cebolla y cilantro picados, además de un mesero y el del trompo. ¡Y frijoles charros de cortesía!",
  },
  {
    q: "¿Cuántas horas de servicio son?",
    a: "Son 3 horas de servicio y llegamos una hora antes del servicio para comenzar a prepapar",
  },
  {
    q: "¿El pastor incluye piña?",
    a: "¡Por supuesto! Nuestro pastor se prepara con el auténtico trompo y lleva piña fresca asada incluida en todos los paquetes. Es parte esencial de nuestro sazón.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos efectivo, pago con tarjeta, transferencias bancarias y depósitos. Para reservar tu fecha, solo necesitas un anticipo del 50%. El resto lo puedes pagar el día del evento.",
  },
  {
    q: "¿Hacen entregas a domicilio?",
    a: "¡Sí! Llevamos todo a tu domicilio o al lugar de tu evento. Incluimos el trompo, taquero y todo lo necesario. Consulta cobertura y costos por WhatsApp.",
  },
  {
    q: "¿Cuántas personas cubre un paquete?",
    a: "Manejamos paquetes desde 25 personas en adelante. El minimo es de 25 personas pero ya no va en trompo va en una nevera y es una hora de servicio.  Cada paquete se ajusta a la cantidad de invitados que tengas. Contáctanos para una cotización personalizada.",
  },
  {
    q: "¿Con cuánto tiempo de anticipación debo reservar?",
    a: "Te recomendamos reservar con al menos 3 a 5 días de anticipación para garantizar tu fecha. En temporada alta (diciembre, mayo), te sugerimos reservar con más tiempo.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#FFF9E6]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-center text-[#4E3629] mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-[#4E3629]/70 font-['Montserrat',sans-serif] mb-12">
          Todo lo que necesitas saber sobre nuestras taquizas
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#F4B441]/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-['Montserrat',sans-serif] text-[#4E3629] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F39200] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-[#4E3629]/70 font-['Montserrat',sans-serif]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
