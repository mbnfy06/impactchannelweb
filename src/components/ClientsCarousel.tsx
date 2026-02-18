'use client';
import { LogoCloud } from './ui/logo-cloud';

const logos = [
    { src: '/images/logos/client-1.png', alt: 'Mediapost', width: 140 },
    { src: '/images/logos/client-2.png', alt: 'Mercedes-Benz', width: 60 },
    { src: '/images/logos/client-3.png', alt: 'Alten', width: 100 },
    { src: '/images/logos/client-4.png', alt: 'Tien 21', width: 120 },
    { src: '/images/logos/client-5.png', alt: 'Leroy Merlin', width: 100 },
    { src: '/images/logos/client-alain.png', alt: 'Alain Afflelou', width: 130 },
    { src: '/images/logos/client-vision.png', alt: 'Vision & Co', width: 120 },
    { src: '/images/logos/client-milar.png', alt: 'Milar', width: 100 },
    { src: '/images/logos/client-ing.png', alt: 'ING', width: 100 },
    { src: '/images/logos/client-1.png', alt: 'Mediapost', width: 140 },
    { src: '/images/logos/client-2.png', alt: 'Mercedes-Benz', width: 60 },
    { src: '/images/logos/client-3.png', alt: 'Alten', width: 100 },
];

const ClientsCarousel = () => {
    return (
        <section className="py-20 bg-[#0D0D0D] relative overflow-hidden border-y border-[#FFB800]/10">
            {/* Amber line accent at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent" />

            <div className="container relative z-10 text-center">
                <span className="inline-block text-[#FFB800] text-xs font-bold tracking-[0.2em] uppercase mb-3">Clientes de toda España</span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 tracking-tight max-w-3xl mx-auto">
                    Confían en nuestra Agencia de <span className="text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.4)]">Retail Marketing</span>
                </h2>

                <div className="w-full max-w-6xl mx-auto">
                    <LogoCloud logos={logos} />
                </div>
            </div>

            {/* Amber line accent at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent" />
        </section>
    );
};

export default ClientsCarousel;
