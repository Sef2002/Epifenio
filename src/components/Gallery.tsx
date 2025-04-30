import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const galleryImages = [
    'src/assets/gallery1.png',
    'src/assets/gallery2.png',
    'src/assets/gallery3.png',
    'src/assets/gallery4.png',
    'src/assets/gallery5.png',
    'src/assets/gallery6.png',
  ];

  return (
    <section id="galleria" className="py-20 bg-[#F5F0E6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-[#3C2A21]">
          Galleria
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ml-2 md:ml-4 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-[#3C2A21]" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 mr-2 md:mr-4 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-[#3C2A21]" />
          </button>

          {/* Horizontal scrolling gallery */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-4 py-4 snap-x"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[380px] h-[400px] snap-center"
              >
                <img
                  src={image}
                  alt={`Galleria Epifanio ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;