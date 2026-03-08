import { ClipboardList, MessageCircle, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Elige tu paquete",
    description: "Selecciona entre Pastor, Chuleta, Bistec o Especialidades.",
    color: "#F39200",
  },
  {
    icon: MessageCircle,
    title: "Cotiza por WhatsApp",
    description: "Recibe atención inmediata y reserva tu fecha.",
    color: "#F4B441",
  },
  {
    icon: PartyPopper,
    title: "¡Disfruta!",
    description: "Nosotros llevamos todo: salsas, desechables y el mejor sabor.",
    color: "#F39200",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-[#FFF9E6]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-center text-[#4E3629] mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-center text-[#4E3629]/70 font-['Montserrat',sans-serif] mb-14 max-w-xl mx-auto">
          En solo 3 pasos, tu evento tendrá la mejor taquiza
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              {/* Number badge */}
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4E3629] text-white rounded-full flex items-center justify-center font-['Montserrat',sans-serif] text-sm">
                  {i + 1}
                </div>
              </div>

              <h3 className="font-['Luckiest_Guy',cursive] text-xl md:text-2xl text-[#4E3629] mb-2">
                {step.title}
              </h3>
              <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
