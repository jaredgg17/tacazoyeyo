import { Phone, Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#4E3629] text-[#FFF9E6] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Luckiest_Guy',cursive] text-2xl text-[#F39200] mb-4">
              Zair & El Tacazo de Yeyo
            </h3>
            <p className="font-['Montserrat',sans-serif] text-[#FFF9E6]/70 text-sm">
              Los mejores tacos al pastor, chuleta, bistec y especialidades para tus eventos y fiestas.
              ¡Llevamos el sabor hasta tu puerta!
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#F4B441] mb-4">
              Contacto
            </h4>
            <div className="space-y-3 font-['Montserrat',sans-serif] text-sm">
              <a
                href="tel:9231115417"
                className="flex items-center gap-3 hover:text-[#F39200] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F39200]" />
                Taqueria Zair: 923 111 54 17
              </a>
              <a
                href="tel:9233213732"
                className="flex items-center gap-3 hover:text-[#F39200] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F39200]" />
                El Tacazo de Yeyo: 923 321 37 32
              </a>
              <div className="flex items-center gap-3 text-[#FFF9E6]/70">
                <MapPin className="w-4 h-4 text-[#F39200]" />
                Servicio a domicilio y eventos
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#F4B441] mb-4">
              Síguenos
            </h4>
            <div className="space-y-3 font-['Montserrat',sans-serif] text-sm">
              <a
                href="https://www.facebook.com/share/18J3Zw5eh3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F39200] transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#F39200]" />
                Taqueria Zair y el tacazo de 
              </a>
              
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#F39200] transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#F39200]" />
              
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
<div className="border-t border-[#6b4d3d] pt-8 text-center"> <p className="font-['Montserrat',sans-serif] text-[#FFF9E6]/50 text-sm"> &copy; 2026 Zair & El Tacazo de Yeyo. website realizado por{" "} <a href="https://www.instagram.com/21studio.mx?igsh=dWMyZ2V4dzAzd3ly" target="_blank" rel="noopener noreferrer" className="text-[#FFF9E6] hover:underline" > 21Studio mx </a>. Todos los derechos reservados. </p> </div>
      </div>
    </footer>
  );
}
