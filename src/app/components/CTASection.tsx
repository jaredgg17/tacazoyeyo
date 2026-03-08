import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PaymentMethods } from "./PaymentMethods";

const WHATSAPP_LINK = "https://wa.me/529231115417?text=Hola%2C%20quiero%20pedir%20tacos";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1717070397656-29f04e19a5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvJTIwY2F0ZXJpbmclMjBidWZmZXQlMjBzZXR1cHxlbnwxfHx8fDE3NzIxMjUzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Taquiza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F39200]/90" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h2 className="font-['Luckiest_Guy',cursive] text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg">
          ¿Hambre?
        </h2>
        <p className="text-white/90 font-['Montserrat',sans-serif] text-lg md:text-xl mb-10 max-w-lg mx-auto">
          No esperes más. Haz tu pedido ahora y disfruta de los mejores tacos de la ciudad.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#F39200] hover:bg-[#FFF9E6] px-10 md:px-16 py-5 md:py-6 rounded-full text-xl md:text-3xl font-['Montserrat',sans-serif] shadow-2xl hover:scale-105 transition-all"
        >
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
          ¡Pide ahora por WhatsApp!
        </a>

        {/* Payment Methods */}
        <div className="mt-10">
          <PaymentMethods />
        </div>
      </div>
    </section>
  );
}