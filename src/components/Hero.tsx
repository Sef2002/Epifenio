import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../index.css';

const Hero = () => {
  const [arrowOpacity, setArrowOpacity] = useState([0.3, 0.5, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowOpacity((prev) => {
        const newOpacities = [...prev];
        newOpacities[0] = prev[0] >= 1 ? 0.3 : prev[0] + 0.1;
        newOpacities[1] = prev[1] >= 1 ? 0.5 : prev[1] + 0.1;
        newOpacities[2] = prev[2] >= 1 ? 0.7 : prev[2] + 0.1;
        return newOpacities;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[calc(100vh-0px)] w-full bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: 'url(/src/assets/background2.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white relative z-10">
        {/* Left spacing */}
        <div className="hidden md:block md:w-1/2" />

        {/* Right content block */}
        <div className="md:w-1/2 md:pr-20 text-right">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2">Mory New Style</h1>
          <p className="text-lg md:text-2xl font-light mb-4">
            Stile senza confini. Per lui e per lei.
          </p>

          {/* Extended subtle divider */}
          <div className="flex justify-end">
            <div className="h-px w-64 bg-white opacity-50 mb-4 mr-[92px]" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <a
              href="#prenota"
              className="bg-white text-[#3C2A21] px-8 py-3 rounded-full font-semibold text-sm tracking-wider text-center leading-none flex items-center justify-center min-w-[150px]"
            >
              PRENOTA ORA
            </a>
            <a
              href="#servizi"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wider text-center leading-none flex items-center justify-center min-w-[150px]"
            >
              SCOPRI DI PIÙ
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-[2px]">
        <ChevronDown
          size={20}
          style={{ opacity: arrowOpacity[0] }}
          className="text-white animate-pulse"
        />
        <ChevronDown
          size={24}
          style={{ opacity: arrowOpacity[1] }}
          className="text-white animate-pulse"
        />
        <ChevronDown
          size={28}
          style={{ opacity: arrowOpacity[2] }}
          className="text-white animate-pulse"
        />
      </div>
    </section>
  );
};

export default Hero;