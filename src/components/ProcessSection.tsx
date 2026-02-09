import './ProcessSection.css';

const steps = [
    {
        number: '01',
        title: 'Análisis Creativo',
        description: 'Estudiamos tu negocio, clientes, mercado y competencia.',
    },
    {
        number: '02',
        title: 'Visión Global',
        description: 'Equipo multidisciplinar para soluciones integrales.',
    },
    {
        number: '03',
        title: 'Desarrollo Estratégico',
        description: 'Propuestas coherentes con tu plan de marketing.',
    },
    {
        number: '04',
        title: 'Producción',
        description: 'Lo hacemos realidad con calidad y en plazo.',
    },
];

const ProcessSection = () => {
    return (
        <section id="proceso" className="process section">
            <div className="process__container container">
                <div className="process__content">
                    <h2 className="process__title">Nuestro proceso de trabajo</h2>
                    <p className="process__subtitle">
                        Un enfoque metodológico que garantiza resultados. Desde el <span className="text-yellow">análisis inicial</span> hasta la <span className="text-yellow">entrega final</span>, cuidamos cada detalle.
                    </p>

                    <div className="process__steps">
                        {steps.map((step, index) => (
                            <div key={index} className="process__step">
                                <div className="process__step-number">{step.number}</div>
                                <div className="process__step-content">
                                    <h3 className="process__step-title">{step.title}</h3>
                                    <p className="process__step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="btn btn-secondary process__link">
                        Ver proceso completo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
