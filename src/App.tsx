import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Salon from './components/Salon';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for logo reveal animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-roboto">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Salon />
            <Gallery />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;