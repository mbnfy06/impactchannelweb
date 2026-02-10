import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

  const isContactExpanded = location.pathname === '/contact' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'contacto') {
      navigate('/contact');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'know-how') {
      navigate('/know-how');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const navItems = [
    { name: "Inicio", link: "#", onClick: () => handleNavigation('inicio') },
    { name: "Servicios", link: "#", onClick: () => handleNavigation('servicios') },
    { name: "Know-How", link: "#", onClick: () => handleNavigation('know-how') },
    { name: "Proceso", link: "#", onClick: () => handleNavigation('proceso') },
    { name: "Contacto", link: "#", onClick: () => handleNavigation('contacto') },
  ];

  const Logo = ({ className }: { className?: string }) => (
    <a
      href="/"
      onClick={(e) => { e.preventDefault(); handleNavigation('inicio'); }}
      className={`flex items-center space-x-2 ${className}`}
    >
      <img
        src={isScrolled ? logoSmall : logoFull}
        alt="Impact Channel"
        className={`object-contain transition-all duration-700 ease-in-out ${isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'}`}
        style={isContactExpanded ? { filter: 'brightness(0)' } : {}}
      />
    </a>
  );

  return (
    <Navbar className={`!fixed ${isContactExpanded ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      {/* Desktop Navigation */}
      <NavBody className="bg-transparent border-0 backdrop-blur-md">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <NavItems
            items={navItems}
            visible={isScrolled || isContactExpanded}
          />
          <button
            onClick={() => handleNavigation('contacto')}
            className={`btn btn-primary header__cta text-sm px-4 py-2 hidden lg:block`}
          >
            Pedir Presupuesto
          </button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className={isContactExpanded ? "bg-white/95" : ""}>
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
            onClick={() => handleNavigation('contacto')}
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
