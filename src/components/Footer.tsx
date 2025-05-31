import { Phone, Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="prenota" className="bg-[#3C2A21] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo + Motto + Social */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Epifanio Di Giovanni" className="h-16 mb-4" />
            <p className="text-center md:text-left mb-4 text-sm opacity-90">
              Stile senza confini. Per lui e per lei.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="tel:0363419388" className="hover:text-[#d4c9bc] transition-colors" aria-label="Telefono">
                <Phone size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4c9bc] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4c9bc] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Center: Contacts and Opening Hours */}
          <div className="text-sm text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={18} className="mr-2" />
              <a href="tel:0363419388" className="hover:text-[#d4c9bc]">0363 419388</a>
            </div>

            <div className="flex items-start justify-center md:justify-start">
              <MapPin size={18} className="mr-2 mt-1" />
              <span>
                Via Casnida, 16<br />
                24047 Treviglio BG
              </span>
            </div>

            <div className="flex items-start justify-center md:justify-start">
              <Clock size={18} className="mr-2 mt-1" />
              <div>
                <p>Martedì: 11–21</p>
                <p>Mer–Ven: 09–19</p>
                <p>Sabato: 09–18</p>
                <p>Dom–Lun: Chiuso</p>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Dove Trovarci</h3>
            <div className="h-52 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.4876795851097!2d9.588974776189686!3d45.51850497108275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478151f5c2c7b0e7%3A0x8c8f5c4c8c5c4c4c!2sVia%20Casnida%2C%2016%2C%2024047%20Treviglio%20BG!5e0!3m2!1sit!2sit!4v1715693287344!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Epifanio Di Giovanni"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-white border-opacity-20">
          <p className="text-xs text-white text-opacity-60 tracking-widest uppercase">
            &copy; Epifanio Di Giovanni 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;