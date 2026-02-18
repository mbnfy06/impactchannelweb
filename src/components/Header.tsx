'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
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

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isContactExpanded = pathname === '/contact' && !isScrolled;

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
            router.push('/contact');
            window.scrollTo(0, 0);
            return;
        }

        if (id === 'know-how') {
            router.push('/know-how');
            window.scrollTo(0, 0);
            return;
        }

        if (id === 'servicios') {
            router.push('/services');
            window.scrollTo(0, 0);
            return;
        }

        if (pathname !== '/') {
            router.push('/');
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
        { name: "Contacto", link: "#", onClick: () => handleNavigation('contacto') },
    ];

    const Logo = ({ className }: { className?: string }) => (
        <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavigation('inicio'); }}
            className={`flex items-center space-x-2 ${className}`}
        >
            <Image
                src={isScrolled ? '/images/logo-small.png' : '/images/logo-full.png'}
                alt="Impact Channel"
                width={isScrolled ? 40 : 120}
                height={isScrolled ? 40 : 48}
                className={`object-contain transition-all duration-700 ease-in-out ${isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'}`}
                style={isContactExpanded ? { filter: 'brightness(0)' } : {}}
                priority
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
                    <Button
                        onClick={() => handleNavigation('contacto')}
                        className="bg-primary text-background hover:bg-primary/90 font-bold text-sm px-6 py-2 h-10 rounded-full shadow-[0_4px_14px_0_rgba(255,184,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.5)] hover:-translate-y-0.5 transition-all duration-200 hidden lg:flex items-center gap-2"
                    >
                        Pedir Presupuesto
                        <ArrowRight className="w-4 h-4" />
                    </Button>
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
                    <Button
                        onClick={() => handleNavigation('contacto')}
                        className="bg-primary text-background hover:bg-primary/90 font-bold w-full mt-4 rounded-full shadow-[0_4px_14px_0_rgba(255,184,0,0.39)] flex items-center justify-center gap-2"
                    >
                        Pedir Presupuesto
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
};

export default Header;
