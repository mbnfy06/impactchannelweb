import { useRef, useState } from 'react';
import './ServicesCards.css';

interface Service {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
}

const services: Service[] = [
    {
        id: 'impresion',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9V2H18V9M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18M6 14H18V22H6V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Impresión Digital',
        description: 'Imprimimos absolutamente todo: gran formato, vinilos, catálogos, textil y más. Calidad profesional con plazos ágiles.',
        features: ['Gran formato y rotulación', 'Offset y papelería', 'Textil personalizado'],
    },
    {
        id: 'promotional-gifts',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Regalo Publicitario',
        description: 'Gestión integral de merchandising: búsqueda, diseño, personalización y logística. Oficinas en España y China.',
        features: ['Catálogo extenso', 'Personalización total', 'Importación directa'],
    },
    {
        id: 'trade',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Trade Marketing',
        description: 'Especialistas en punto de venta. Optimizamos la visibilidad y rentabilidad de tu producto en el retail.',
        features: ['Activación PDV', 'Gestión de categorías', 'Shopper marketing'],
    },
    {
        id: 'digital-signage',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Digital Signage',
        description: 'Pantallas y contenidos digitales para comunicar en el punto de venta. Hardware, software y gestión de contenidos.',
        features: ['Pantallas LED/LCD', 'Gestión de contenidos', 'Soporte técnico'],
    },
];

const ServicesCards = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
        setActiveCard(null);
    };

    return (
        <section id="servicios" className="services section-light">
            <div className="services__container container">
                <h2 className="services__title">Servicios integrales de marketing</h2>
                <p className="services__subtitle">
                    Desde la idea hasta la ejecución. Cubrimos todas las necesidades de tu marca en el punto de venta y más allá.
                </p>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className={`services__card ${activeCard === index ? 'services__card--hover' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="services__card-glow"></div>
                            <div className="services__card-content">
                                <div className="services__icon">
                                    {service.icon}
                                </div>
                                <h3 className="services__card-title">{service.title}</h3>
                                <p className="services__card-description">{service.description}</p>

                                <ul className="services__features">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="services__feature">
                                            <span className="services__feature-bullet">+</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#" className="btn btn-link services__link">
                                    Ver más
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;
