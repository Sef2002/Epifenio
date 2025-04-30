import { useState } from 'react';

// Service data
const servicesDonna = [
  { name: 'Piega', price: '15€', duration: '30 min' },
  { name: 'Colore base', price: '30€', duration: '90 min' },
  { name: 'Tonalizzante', price: '20€', duration: '45 min' },
  { name: 'Taglio donna', price: '25€', duration: '45 min' },
  { name: 'Ricostruzione', price: '20€', duration: '60 min' },
  { name: 'Cheratina lisciante', price: '5€ al grammo', duration: 'Variabile' },
  { name: 'Schiariture', price: 'da 50€ a 80€', duration: '120 min' },
];

const servicesUomo = [
  { name: 'Taglio uomo', price: '20€', duration: '30 min' },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('donna');

  return (
    <section id="servizi" className="py-20 bg-[#F5F0E6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-[#3C2A21]">
          I Nostri Servizi
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <button
              className={`px-8 py-3 font-medium text-lg transition-colors ${
                activeTab === 'donna'
                  ? 'bg-[#3C2A21] text-white'
                  : 'bg-white text-[#3C2A21] hover:bg-gray-100'
              } rounded-l-full`}
              onClick={() => setActiveTab('donna')}
            >
              PER LEI
            </button>
            <button
              className={`px-8 py-3 font-medium text-lg transition-colors ${
                activeTab === 'uomo'
                  ? 'bg-[#3C2A21] text-white'
                  : 'bg-white text-[#3C2A21] hover:bg-gray-100'
              } rounded-r-full`}
              onClick={() => setActiveTab('uomo')}
            >
              PER LUI
            </button>
          </div>

          {/* Service lists */}
          <div
            className={`transition-opacity duration-300 ${
              activeTab === 'donna' ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-light text-[#3C2A21] mb-6 text-center">
                Servizi Per Lei
              </h3>
              <div className="space-y-6">
                {servicesDonna.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-4 last:border-0"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-[#3C2A21]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Durata: {service.duration}
                      </p>
                    </div>
                    <p className="text-xl font-medium text-[#D4AF37]">
                      {service.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              activeTab === 'uomo' ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-light text-[#3C2A21] mb-6 text-center">
                Servizi Per Lui
              </h3>
              <div className="space-y-6">
                {servicesUomo.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-4 last:border-0"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-[#3C2A21]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Durata: {service.duration}
                      </p>
                    </div>
                    <p className="text-xl font-medium text-[#D4AF37]">
                      {service.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="tel:0363700765"
              className="bg-[#3C2A21] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              PRENOTA ORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;