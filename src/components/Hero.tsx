import './Hero.css';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="hero section-dark">
            <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
                {/* Empty children for beams, content is separate or we can wrap content if we want beams behind */}
                <div className="hidden"></div>
            </BackgroundBeamsWithCollision>

            <div className="hero__container container">
                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Retail & Trade Marketing Specialist
                    </span>

                    <h1 className="hero__title">
                        Soluciones integrales para el <span className="text-yellow">punto de venta</span>
                    </h1>

                    <p className="hero__description">
                        We want to be your marketing partner. Acompañamos a marcas y retailers en el desarrollo y ejecución de proyectos de impresión, merchandising, PLV y digital signage.
                    </p>

                    <div className="hero__buttons">
                        <button onClick={() => scrollToSection('contacto')} className="btn btn-primary">
                            Pedir Presupuesto
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button onClick={() => scrollToSection('servicios')} className="btn btn-secondary">
                            Descubre nuestros servicios
                        </button>
                    </div>

                    <div className="hero__badges">
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Sin compromiso</span>
                        </div>
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Respuesta en 24h</span>
                        </div>
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M12 3L14.5 8L20 9L16 13L17 19L12 16L7 19L8 13L4 9L9.5 8L12 3Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Calidad garantizada</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
