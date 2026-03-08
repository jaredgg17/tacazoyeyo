import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/6DGEvViRov8RBveg6?g_st=awb";
const EMBED_URL =
  "https://www.google.com/maps?q=Zair+%26+El+Tacazo+de+Yeyo&output=embed";

export function MapSection() {
  return (
    <section id="ubicacion" className="py-20 bg-[#4E3629] relative overflow-hidden">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F39200] via-[#F4B441] to-[#F39200]" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MapPin className="w-8 h-8 text-[#F39200]" />
            <h2 className="font-['Luckiest_Guy',cursive] text-3xl md:text-5xl text-[#F39200]">
              Enc&uacute;entranos
            </h2>
          </div>
          <p className="text-[#FFF9E6]/70 font-['Montserrat',sans-serif]">
            Vis&iacute;tanos o pide tu taquiza a domicilio
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F39200]/40 min-h-[350px]">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Zair & El Tacazo de Yeyo"
              className="w-full h-full"
            />
          </div>

          {/* Info card */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-[#FFF9E6] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F39200]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F39200]" />
                </div>
                <div>
                  <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629] mb-1">
                    Direcci&oacute;n
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-[#4E3629]/70 text-sm">
                    Zair &amp; El Tacazo de Yeyo
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#FFF9E6] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4B441]/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#F4B441]" />
                </div>
                <div>
                  <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629] mb-1">
                    Tel&eacute;fonos
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-[#4E3629]/70 text-sm">
                    923 111 54 17
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[#4E3629]/70 text-sm">
                    923 321 37 32
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#FFF9E6] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F39200]/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#F39200]" />
                </div>
                <div>
                  <h4 className="font-['Luckiest_Guy',cursive] text-lg text-[#4E3629] mb-1">
                    Horario
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-[#4E3629]/70 text-sm">
                    Lunes a Domingo
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#F39200] hover:bg-[#e08500] text-white font-['Montserrat',sans-serif] px-6 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <Navigation className="w-5 h-5" />
              C&oacute;mo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}