import { useState } from "react";
import { Flame, Tag, Star, Utensils, Gift, CreditCard, ChefHat, Sparkles, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuImg = "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.03.07%20(2).jpeg?raw=true";
const menuImg2 = "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.03.07%20(3).jpeg?raw=true";

const IMG_TACOS = "https://github.com/jaredgg17/audio/blob/main/taqueria/ChatGPT%20Image%2026%20feb%202026,%2011_06_16%20p.m..png?raw=true";

const IMG_TORTA = "https://raw.githubusercontent.com/jaredgg17/audio/fc3956fedb01e2e3d5dbb84219cc3413ed89fa3f/taqueria/ChatGPT%20Image%201%20mar%202026%2C%2004_50_57%20p.m..png";
const IMG_CATERING = "https://github.com/jaredgg17/audio/blob/main/taqueria/ChatGPT%20Image%201%20mar%202026,%2004_57_07%20p.m..png?raw=true";


/* ── Lightbox Modal ── */
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
        aria-label="Cerrar"
      >
        <X className="w-7 h-7" />
      </button>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      />
    </div>
  );
}

/* ── Circular image helper ── */
function CircleImg({ src, alt, size = "w-28 h-28 md:w-36 md:h-36", onOpen }: { src: string; alt: string; size?: string; onOpen?: (src: string, alt: string) => void }) {
  return (
    <div
      className={`${size} rounded-full overflow-hidden border-4 border-[#F39200] shadow-lg flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform`}
      onClick={() => onOpen?.(src, alt)}
    >
      <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

/* ── Sub-section 1 ── */
function TacosPromos({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Tag className="w-7 h-7 text-[#F39200]" />
        <h3 className="font-['Luckiest_Guy',cursive] text-2xl md:text-4xl text-[#F39200]">
          Tacos y Promociones Especiales
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Left: Promo cards */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
          {/* Pastor 2x1 */}
          <div className="bg-gradient-to-br from-[#FF4500]/10 to-[#F39200]/10 border-2 border-[#FF4500] rounded-2xl p-5 relative overflow-hidden hover:scale-[1.03] transition-transform">
            <span className="absolute top-3 right-3 bg-[#FF4500] text-white text-xs px-3 py-1 rounded-full font-['Montserrat',sans-serif]">2 &times; 1</span>
            <Flame className="w-8 h-8 text-[#FF4500] mb-2" />
            <h4 className="font-['Luckiest_Guy',cursive] text-xl text-[#4E3629]">Pastor 2 &times; 1</h4>
            <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">Dos tacos de pastor al precio de uno</p>
          </div>

          {/* Chuleta 2x1 */}
          <div className="bg-gradient-to-br from-[#FF4500]/10 to-[#F39200]/10 border-2 border-[#FF4500] rounded-2xl p-5 relative overflow-hidden hover:scale-[1.03] transition-transform">
            <span className="absolute top-3 right-3 bg-[#FF4500] text-white text-xs px-3 py-1 rounded-full font-['Montserrat',sans-serif]">2 &times; 1</span>
            <Flame className="w-8 h-8 text-[#FF4500] mb-2" />
            <h4 className="font-['Luckiest_Guy',cursive] text-xl text-[#4E3629]">Chuleta 2 &times; 1</h4>
            <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">Dos tacos de chuleta al precio de uno</p>
          </div>

          {/* Bistec */}
          <div className="bg-[#FFF9E6] border border-[#F4B441]/40 rounded-2xl p-5 hover:scale-[1.03] transition-transform">
            <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629]">Bistec</h4>
            <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">Suave y jugoso a la plancha</p>
          </div>

          {/* Chorizo */}
          <div className="bg-[#FFF9E6] border border-[#F4B441]/40 rounded-2xl p-5 hover:scale-[1.03] transition-transform">
            <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629]">Chorizo</h4>
            <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">Chorizo artesanal con sabor casero</p>
          </div>

          {/* Tacos con queso */}
          <div className="sm:col-span-2 bg-[#F4B441]/15 border border-[#FF4500] rounded-2xl p-5 hover:scale-[1.03] transition-transform">
            <Flame className="w-6 h-6 text-[#F4B441] mb-1" />
            <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629]">Tacos con Queso</h4>
            <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">
              Pastor, chuleta, bistec y chorizo &mdash; con queso derretido
            </p>
          </div>

          {/* Sincronizadas */}
          <div className="sm:col-span-2 bg-[#FFF9E6] border border-[#F4B441]/40 rounded-2xl p-5 hover:scale-[1.03] transition-transform flex items-center gap-4">
            <div>
              <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629]">Sincronizadas</h4>
              <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-1">
                Jam&oacute;n, pi&ntilde;a y queso
              </p>
            </div>
            <span className="ml-auto bg-[#F39200] text-white font-['Luckiest_Guy',cursive] text-lg px-4 py-2 rounded-full whitespace-nowrap">
              2 &times; $70
            </span>
          </div>
        </div>

        {/* Right: Kilo de Pastor badge + circular image */}
        <div className="flex flex-col items-center gap-6">
          <CircleImg src={IMG_TACOS} alt="Tacos al pastor" size="w-40 h-40 md:w-48 md:h-48" onOpen={onOpen} />
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-[#4E3629] flex flex-col items-center justify-center shadow-2xl border-4 border-[#F39200]">
            <span className="text-[#F4B441] text-sm font-['Montserrat',sans-serif]">Kilo de Pastor</span>
            <span className="font-['Luckiest_Guy',cursive] text-4xl md:text-5xl text-white">$380</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-section 2 ── */
const platillos = [
  { name: "Fortach\u00f3n", ingredients: "Chuleta, bistec, chorizo, jam\u00f3n, tocino y queso." },
  { name: "Parrillada", ingredients: "Pastor, chuleta, bistec, chorizo, jam\u00f3n, tocino y queso." },
  { name: "Alambre", ingredients: "Chuleta, morr\u00f3n, tomate, cebolla, chorizo, jam\u00f3n, tocino y queso." },
  { name: "Champi\u00f1\u00f3n", ingredients: "Chuleta o bistec, champi\u00f1\u00f3n, jam\u00f3n, tocino y queso." },
  { name: "Chop Suey", ingredients: "Chuleta, morr\u00f3n, chorizo, jam\u00f3n, tocino y queso." },
  { name: "F\u00f3rmula", ingredients: "Pastor, chuleta, morr\u00f3n, tomate, cebolla, jam\u00f3n, tocino y queso." },
];

function PlatillosEspeciales({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <ChefHat className="w-7 h-7 text-[#F4B441]" />
        <h3 className="font-['Luckiest_Guy',cursive] text-2xl md:text-4xl text-[#F4B441]">
          Platillos Especiales
        </h3>
      </div>
      <p className="text-center text-[#4E3629]/60 font-['Montserrat',sans-serif] mb-8 -mt-4">
        Los &ldquo;Fortachones&rdquo; &mdash; para los que llegan con hambre de verdad
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Grid of platillos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          {platillos.map((p) => (
            <div
              key={p.name}
              className="bg-[#F4B441]/15 border border-[#F4B441]/50 rounded-2xl p-5 hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629] mb-1 flex items-center gap-2">
                <span className="inline-block bg-[#F39200] text-white text-xs px-2.5 py-0.5 rounded-md font-['Montserrat',sans-serif] uppercase">
                  {p.name}
                </span>
              </h4>
              <p className="text-[#4E3629]/70 font-['Montserrat',sans-serif] text-sm mt-2">
                {p.ingredients}
              </p>
            </div>
          ))}
        </div>

        {/* Circular images */}
        
      </div>

      {/* Footer note */}
      <div className="mt-8 bg-[#4E3629] rounded-xl px-6 py-4 text-center">
        <p className="font-['Montserrat',sans-serif] text-[#F4B441] uppercase tracking-wider">
          Todos los platillos incluyen cebolla asada, salsas y tortillas
        </p>
      </div>
    </div>
  );
}

/* ── Sub-section 3 ── */
const extras = ["Tortas", "Gringas", "Burritas", "Tacos de Harina"];

const paqueteItems = [
  "Desechables",
  "Salsa mexicana",
  "Salsa verde",
  "Limones",
  "Pi\u00f1a",
  "Cebolla / cilantro",
];

function ExtrasYPaquetes({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Gift className="w-7 h-7 text-[#F39200]" />
        <h3 className="font-['Luckiest_Guy',cursive] text-2xl md:text-4xl text-[#F39200]">
          Extras y Paquetes de Taquizas
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Extras list */}
        <div className="bg-[#FFF9E6] rounded-2xl p-6 border border-[#F4B441]/30 shadow-md">
          <h4 className="font-['Luckiest_Guy',cursive] text-xl text-[#4E3629] mb-4 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#F39200]" /> Extras
          </h4>
          <ul className="space-y-3">
            {extras.map((e) => (
              <li key={e} className="flex items-center gap-3 font-['Montserrat',sans-serif] text-[#4E3629]">
                <span className="w-2 h-2 rounded-full bg-[#F39200] flex-shrink-0" />
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CircleImg src={IMG_TORTA} alt="Torta mexicana" size="w-24 h-24 mx-auto" onOpen={onOpen} />
          </div>
        </div>

        {/* Paquetes */}
        <div className="bg-gradient-to-b from-[#F4B441]/20 to-[#F39200]/10 rounded-2xl p-6 border-2 border-[#F4B441] shadow-lg md:col-span-1">
          <h4 className="font-['Luckiest_Guy',cursive] text-xl text-[#4E3629] mb-1">
            Nuestros paquetes para eventos incluyen:
          </h4>
          <ul className="mt-4 space-y-3">
            {paqueteItems.map((item) => (
              <li key={item} className="flex items-center gap-3 font-['Montserrat',sans-serif] text-[#4E3629]">
                <Sparkles className="w-4 h-4 text-[#F39200] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Frijoles charros callout */}
          <div className="mt-6 text-center">
            <p
              className="inline-block text-[#F39200] text-xl md:text-2xl italic rotate-[-2deg]"
              style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
              Frijoles charros
            </p>
            <p
              className="text-[#F39200] text-lg italic"
              style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
              De cortes&iacute;a
            </p>
          </div>
        </div>

        {/* Circular photo + catering */}
        <div className="flex flex-col items-center gap-6">
          <CircleImg src={IMG_CATERING} alt="Taquiza evento" size="w-40 h-40 md:w-48 md:h-48" onOpen={onOpen} />
          <p className="font-['Montserrat',sans-serif] text-[#4E3629]/60 text-center text-sm">
            Montamos tu taquiza donde t&uacute; nos digas &mdash; bodas, XV a&ntilde;os, cumplea&ntilde;os y m&aacute;s.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export function MenuCompleto() {
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, alt: string) => {
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalSrc("");
    setModalAlt("");
  };

  return (
    <section id="menu-completo" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F39200] via-[#F4B441] to-[#F39200]" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="font-['Luckiest_Guy',cursive] text-4xl md:text-6xl text-[#4E3629] mb-3">
            Men&uacute; Completo
          </h2>
          <div className="w-24 h-1.5 bg-[#F39200] mx-auto rounded-full" />
        </div>

        {/* Reference images row */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
          <div
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#F4B441] max-w-xs hover:scale-[1.02] transition-transform cursor-zoom-in"
            onClick={() => openModal(menuImg2, "Menú Tacos")}
          >
            <ImageWithFallback src={menuImg2} alt="Menú Tacos" className="w-full h-auto" />
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#F4B441] max-w-xs hover:scale-[1.02] transition-transform cursor-zoom-in"
            onClick={() => openModal(menuImg, "Menú Platillos")}
          >
            <ImageWithFallback src={menuImg} alt="Menú Platillos" className="w-full h-auto" />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-[#F4B441]/30" />
          <Flame className="w-6 h-6 text-[#F39200]" />
          <div className="flex-1 h-px bg-[#F4B441]/30" />
        </div>

        {/* Sub-sections */}
        <TacosPromos onOpen={openModal} />

        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-[#F4B441]/30" />
          <ChefHat className="w-6 h-6 text-[#F4B441]" />
          <div className="flex-1 h-px bg-[#F4B441]/30" />
        </div>

        <PlatillosEspeciales onOpen={openModal} />

        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-[#F4B441]/30" />
          <Gift className="w-6 h-6 text-[#F39200]" />
          <div className="flex-1 h-px bg-[#F4B441]/30" />
        </div>

        <ExtrasYPaquetes onOpen={openModal} />

        {/* ACEPTAMOS TRANSFERENCIAS footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#4E3629] text-[#F4B441] font-['Luckiest_Guy',cursive] text-xl md:text-2xl px-8 py-4 rounded-full shadow-lg">
            <CreditCard className="w-6 h-6" />
            Aceptamos Transferencias y pago con tarjeta
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#F39200] via-[#F4B441] to-[#F39200]" />

      {/* Lightbox Modal */}
      {modalSrc && <ImageModal src={modalSrc} alt={modalAlt} onClose={closeModal} />}
    </section>
  );
}