import './ClientsCarousel.css';
import { LogoCloud } from './ui/logo-cloud';
import client1 from '../assets/logos/client-1.png';
import client2 from '../assets/logos/client-2.png';
import client3 from '../assets/logos/client-3.png';
import client4 from '../assets/logos/client-4.png';
import client5 from '../assets/logos/client-5.png';

import client6 from '../assets/logos/client-alain.png';
import client7 from '../assets/logos/client-vision.png';
import client8 from '../assets/logos/client-milar.png';
// ING was client-ing.png but we already had it? Let's use the new file just in case it's better quality
import client9 from '../assets/logos/client-ing.png';

const logos = [
    { src: client1, alt: 'Mediapost', width: 140 },
    { src: client2, alt: 'Mercedes-Benz', width: 60 },
    { src: client3, alt: 'Alten', width: 100 },
    { src: client4, alt: 'Tien 21', width: 120 },
    { src: client5, alt: 'Leroy Merlin', width: 100 },
    { src: client6, alt: 'Alain Afflelou', width: 130 },
    { src: client7, alt: 'Vision & Co', width: 120 },
    { src: client8, alt: 'Milar', width: 100 },
    { src: client9, alt: 'ING', width: 100 },

    // Duplicates for infinite scroll volume
    { src: client1, alt: 'Mediapost', width: 140 },
    { src: client2, alt: 'Mercedes-Benz', width: 60 },
    { src: client3, alt: 'Alten', width: 100 },
];

const ClientsCarousel = () => {
    return (
        <section className="clients section-light">
            <div className="clients__container container">
                <span className="clients__label">NUESTROS CLIENTES</span>
                <h2 className="clients__title">Confían en nosotros</h2>

                <div className="w-full max-w-6xl">
                    <LogoCloud logos={logos} />
                </div>

                <a href="#" className="btn btn-link clients__link">
                    Ver todos los clientes
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default ClientsCarousel;
