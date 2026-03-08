import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/529231115417?text=Hola%2C%20quiero%20cotizar%20una%20taquiza";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4E3629] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="text-[#F39200] font-['Luckiest_Guy',cursive] text-xl md:text-2xl tracking-wide">
            Zair & El Tacazo de Yeyo
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Inicio", id: "hero" },
            { label: "Cómo funciona", id: "how" },
            { label: "Menú", id: "menu-completo" },
            { label: "Galería", id: "gallery" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#FFF9E6] hover:text-[#F4B441] transition-colors font-['Montserrat',sans-serif]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F39200] hover:bg-[#e08500] text-white px-5 py-2 rounded-full font-['Montserrat',sans-serif] flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" /> Cotizar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#FFF9E6]">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#4E3629] border-t border-[#6b4d3d] px-4 pb-4">
          {[
            { label: "Inicio", id: "hero" },
            { label: "Cómo funciona", id: "how" },
            { label: "Menú", id: "menu-completo" },
            { label: "Galería", id: "gallery" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-3 text-[#FFF9E6] hover:text-[#F4B441] font-['Montserrat',sans-serif] border-b border-[#6b4d3d]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-[#F39200] text-white px-5 py-3 rounded-full font-['Montserrat',sans-serif]"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}