import { Flame, Star, Tag, Beef } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PaymentMethods } from "./PaymentMethods";

const WHATSAPP_LINK = "https://wa.me/529231115417?text=Hola%2C%20quiero%20cotizar%20una%20taquiza";

const promos = [
  {
    title: "Tacos 2x1",
    subtitle: "Pastor / Chuleta",
    icon: Tag,
    badge: "PROMO",
    color: "#F39200",
  },
  {
    title: "Kilo de Pastor",
    subtitle: "$380",
    icon: Flame,
    badge: "OFERTA",
    color: "#F4B441",
  },
  {
    title: "Sincronizadas",
    subtitle: "2 x $70",
    icon: Tag,
    badge: "ESPECIAL",
    color: "#F39200",
  },
  {
    title: "Tortas supremas",
    subtitle: "2 x $100",
    icon: Flame,
    badge: "PROMO",
    color: "#F39200",
  },
  {
    title: "Tortas sencillas",
    subtitle: "2 x $75",
    icon: Flame,
    badge: "PROMO",
    color: "#F39200",
  },
  {
    title: "Gringas",
    subtitle: "2 x $75",
    icon: Flame,
    badge: "PROMO",
    color: "#F39200",
  },
];

const specialties = [
  {
    name: "Fortachón",
    description: "Generosa porción de carne con cebollitas asadas y tortillas hechas a mano.",
    img: "https://github.com/jaredgg17/audio/blob/main/taqueria/ChatGPT%20Image%201%20mar%202026,%2005_06_04%20p.m..png?raw=true",
  },
  {
    name: "Parrillada",
    description: "Selección de carnes a la parrilla con cebollitas asadas y tortillas.",
    img: "https://github.com/jaredgg17/audio/blob/main/taqueria/ChatGPT%20Image%201%20mar%202026,%2005_11_30%20p.m..png?raw=true",
  },
  {
    name: "Alambre",
    description: "Carne, tocino, pimiento, cebolla y queso con cebollitas asadas y tortillas.",
    img: "https://github.com/jaredgg17/audio/blob/main/taqueria/ChatGPT%20Image%201%20mar%202026,%2007_08_19%20p.m..png?raw=true",
  },
  {
    name: "Chop Suey",
    description: "Platillo especial estilo oriental con cebollitas asadas y tortillas.",
    img: "https://github.com/jaredgg17/audio/blob/main/taqueria/Gemini_Generated_Image_la4mnala4mnala4m.png?raw=true",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#4E3629]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Promotions */}
        <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-center text-[#F39200] mb-4">
          Promociones
        </h2>
        <p className="text-center text-[#FFF9E6]/70 font-['Montserrat',sans-serif] mb-12">
          Aprovecha nuestras ofertas especiales
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {promos.map((promo, i) => (
            <a
              key={i}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#FFF9E6] rounded-2xl p-6 text-center hover:scale-105 transition-all shadow-xl overflow-hidden"
            >
              {/* Badge */}
              <div
                className="absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full font-['Montserrat',sans-serif]"
                style={{ backgroundColor: promo.color }}
              >
                {promo.badge}
              </div>

              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: promo.color + "20" }}
              >
                <promo.icon className="w-8 h-8" style={{ color: promo.color }} />
              </div>

              <h3 className="font-['Luckiest_Guy',cursive] text-xl text-[#4E3629]">
                {promo.title}
              </h3>
              <p className="font-['Montserrat',sans-serif] text-[#4E3629]/70 mt-1 text-lg">
                {promo.subtitle}
              </p>
            </a>
          ))}
        </div>

        {/* Specialties */}
        <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-center text-[#F4B441] mb-4">
          Especialidades
        </h2>
        <p className="text-center text-[#FFF9E6]/70 font-['Montserrat',sans-serif] mb-12 flex items-center justify-center gap-2">
          <Beef className="w-5 h-5 text-[#F4B441]" />
          Incluyen cebollitas asadas y tortillas
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-[#FFF9E6] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629]">
                  {item.name}
                </h3>
                <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16">
          <PaymentMethods />
        </div>
      </div>
    </section>
  );
}