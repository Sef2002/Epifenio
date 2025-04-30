const Salon = () => {
  return (
    <section id="salone" className="h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-10 text-[#3C2A21]">
          Il Nostro Salone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch max-w-6xl mx-auto">
          {/* Colonna sinistra: immagine grande */}
          <div className="md:col-span-2 overflow-hidden rounded-xl">
            <img
              src="src/assets/saloon1.png"
              alt="Interno Salone"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ maxHeight: '360px' }}
            />
          </div>

          {/* Colonna destra: due immagini impilate */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl flex-1">
              <img
                src="src/assets/saloon3.png"
                alt="Postazione"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: '175px' }}
              />
            </div>
            <div className="overflow-hidden rounded-xl flex-1">
              <img
                src="src/assets/saloon2.png"
                alt="Strumenti"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: '175px' }}
              />
            </div>
          </div>
        </div>

        {/* Descrizione sotto le immagini */}
        <div className="mt-8 text-center max-w-2xl mx-auto px-4">
          <p className="text-base text-gray-700 mb-4 leading-relaxed">
            Il nostro salone unisce eleganza e comfort, creando un ambiente dove ogni cliente può sentirsi completamente a proprio agio.
          </p>
          <a
            href="#galleria"
            className="inline-block border-2 border-[#3C2A21] text-[#3C2A21] px-6 py-2 rounded-full font-medium text-sm hover:bg-[#3C2A21] hover:text-white transition-colors"
          >
            SCOPRI DI PIÙ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Salon;