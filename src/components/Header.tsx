import { useState, useEffect } from 'react';
import './Header.css';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./ui/navbar";
import logoFull from '../assets/logo-full.png';
import logoSmall from '../assets/logo-small.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Inicio", link: "#", onClick: () => scrollToSection('inicio') },
    { name: "Servicios", link: "#", onClick: () => scrollToSection('servicios') },
    { name: "Know-How", link: "#", onClick: () => scrollToSection('know-how') },
    { name: "Proceso", link: "#", onClick: () => scrollToSection('proceso') },
    { name: "Contacto", link: "#", onClick: () => scrollToSection('contacto') },
  ];

  const Logo = ({ className }: { className?: string }) => (
    <a href="#" className={`flex items-center space-x-2 ${className}`}>
      <img
        src={isScrolled ? logoSmall : logoFull}
        alt="Impact Channel"
        className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'}`}
      />
    </a>
  );

  return (
    <Navbar className="!fixed bg-transparent">
      {/* Desktop Navigation */}
      <NavBody className="bg-transparent border-0 backdrop-blur-md">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <NavItems items={navItems} visible={isScrolled} />
          <button
            onClick={() => scrollToSection('contacto')}
            className="btn btn-primary header__cta text-sm px-4 py-2 hidden lg:block"
          >
            Pedir Presupuesto
          </button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className="w-full text-left py-2 px-4 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contacto')}
            className="btn btn-primary header__cta w-full mt-4 text-center"
          >
            Pedir Presupuesto
          </button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
