import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in the logo
    const fadeIn = setTimeout(() => {
      setOpacity(1);
    }, 300);

    return () => clearTimeout(fadeIn);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F5F0E6] z-50">
      <div
        className="transition-opacity duration-1000"
        style={{ opacity }}
      >
        <img
          src={logo}
          alt="Epifanio Di Giovanni Logo"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;