import { ImageWithFallback } from "./figma/ImageWithFallback";

const WHATSAPP_LINK = "https://wa.me/529231115417?text=Hola%2C%20quiero%20cotizar%20una%20taquiza";

const HERO_IMG =
  "https://raw.githubusercontent.com/jaredgg17/audio/main/taqueria/ChatGPT%20Image%2026%20feb%202026%2C%2004_19_15%20p.m..png";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMG}
          alt="Trompo de pastor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-['Luckiest_Guy',cursive] text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg leading-tight">
          Taquizas para eventos:
          <br />
          <span className="text-[#F39200]">¡Llevamos el sabor a tu fiesta!</span>
        </h1>

        <div className="my-6 inline-block">
          <p
            className="text-xl md:text-3xl italic rotate-[-2deg] px-6 py-2 text-[#ffffff]"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            Incluye frijoles charros DE CORTESÍA
          </p>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#F39200] hover:bg-[#e08500] text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-2xl font-['Montserrat',sans-serif] shadow-2xl hover:scale-105 transition-all"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Cotizar mi Evento por WhatsApp
        </a>

        <p className="text-white mt-6 font-['Montserrat',sans-serif] bg-black/60 backdrop-blur-sm inline-block px-6 py-2 rounded-full drop-shadow-lg">
          Pastor &bull; Chuleta &bull; Bistec &bull; Especialidades
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px]"
        >
          <polygon points="0,80 1440,0 1440,80" fill="#FFF9E6" />
        </svg>
      </div>
    </section>
  );
}