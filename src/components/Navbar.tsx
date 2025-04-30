import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-[#d4c9bc]/30 ${
        scrolled
          ? 'bg-[#e8dfd5]/90 backdrop-blur-md py-2'
          : 'bg-[#e8dfd5]/90 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between">
          {/* Left Brand: Logo Image */}
          <div className="hidden md:flex items-center space-x-3">
            <img
              src={logo}
              alt="EDG Logo"
              className="h-12 object-contain" // increased from h-8 to h-12
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-black/70 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-12">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#servizi">Servizi</NavLink>
            <NavLink href="#salone">Il Nostro Salone</NavLink>
            <NavLink href="#galleria">Galleria</NavLink>
          </nav>

          {/* Right Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contatti"
              className="px-6 py-2 text-sm font-semibold border border-black text-black tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              Prenota Ora
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="bg-[#e8dfd5]/90 backdrop-blur-md mt-2 p-6 rounded-lg space-y-6 shadow-xl">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#servizi" onClick={() => setIsOpen(false)}>Servizi</MobileNavLink>
            <MobileNavLink href="#salone" onClick={() => setIsOpen(false)}>Il Nostro Salone</MobileNavLink>
            <MobileNavLink href="#galleria" onClick={() => setIsOpen(false)}>Galleria</MobileNavLink>
            <MobileNavLink href="#contatti" onClick={() => setIsOpen(false)}>Prenota Ora</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-black text-sm tracking-widest uppercase hover:text-black/70 transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({
  href,
  onClick,
  children
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-center text-black text-lg tracking-widest hover:text-black/70 transition-colors duration-300 border-b border-black/10 pb-4"
  >
    {children}
  </a>
);

export default Navbar;
