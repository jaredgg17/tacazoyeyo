import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.00.46.jpeg?raw=true",
    alt: "Evento de taquiza",
  },
  {
    src: "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.00.46%20(1).jpeg?raw=true",
    alt: "Fiesta mexicana",
  },
  {
    src: "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.00.45.jpeg?raw=true",
    alt: "Buffet de tacos",
  },
  {
    src: "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.00.44.jpeg?raw=true",
    alt: "Trompo de pastor",
  },
  {
    src: "https://github.com/jaredgg17/audio/blob/main/taqueria/WhatsApp%20Image%202026-02-25%20at%2015.00.44%20(1).jpeg?raw=true",
    alt: "Gente disfrutando tacos",
  },
 
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-[#FFF9E6]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-center text-[#4E3629] mb-4">
          Nuestros Eventos
        </h2>
        <p className="text-center text-[#4E3629]/70 font-['Montserrat',sans-serif] mb-12">
          Mira cómo nuestros clientes disfrutan
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Mosaic gallery */}
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                i === 0 ? "md:row-span-2 md:col-span-1" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <div className={`${i === 0 ? "h-48 md:h-full" : "h-48 md:h-56"}`}>
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="mt-12 max-w-md mx-auto">
          
          
        </div>
      </div>
    </section>
  );
}
