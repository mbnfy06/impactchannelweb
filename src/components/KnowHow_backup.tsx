import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './KnowHow.css';

/* ===== Animated Counter Hook ===== */
const useCountUp = (end: number, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!startOnView) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted, startOnView]);

    useEffect(() => {
        if (!hasStarted) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [hasStarted, end, duration]);

    return { count, ref };
};

/* ===== Animation Variants ===== */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

/* ===== Expertise Data (based on real services) ===== */
const expertiseAreas = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9V2H18V9M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18M6 14H18V22H6V14Z" />
            </svg>
        ),
        title: 'Impresión & Producción Gráfica',
        description: 'Capacidad productiva para cubrir cualquier necesidad de impresión: desde una tarjeta de visita hasta una lona de gran formato. Controlamos todo el proceso internamente para garantizar la máxima calidad y los plazos más ajustados del sector.',
        capabilities: [
            'Gran formato y rotulación',
            'Impresión offset y digital',
            'Vinilos y cartelería PDV',
            'Catálogos y papelería corporativa',
            'Textil personalizado',
            'Packaging y PLV',
        ],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" />
            </svg>
        ),
        title: 'Merchandising & Regalo Publicitario',
        description: 'Gestión integral de productos promocionales: búsqueda, diseño, personalización, producción y logística. Operamos con oficinas en España y China, lo que nos permite una importación directa con control de calidad in situ.',
        capabilities: [
            'Catálogo extenso de productos',
            'Personalización total (serigrafía, grabado, bordado)',
            'Importación directa desde Asia',
            'Control de calidad en origen',
            'Almacenaje y logística',
            'Kitting y packaging a medida',
        ],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
                <path d="M9 22V12H15V22" />
            </svg>
        ),
        title: 'Trade Marketing & Activación PDV',
        description: 'Especialistas en el punto de venta. Diseñamos e implementamos estrategias que optimizan la visibilidad y rentabilidad de los productos en el entorno retail, conectando marcas con compradores en el momento decisivo.',
        capabilities: [
            'Activación en punto de venta',
            'Gestión de categorías',
            'Shopper marketing',
            'Diseño de expositores y displays',
            'PLV temporal y permanente',
            'Implantación y seguimiento en tienda',
        ],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" />
                <path d="M8 21H16M12 17V21" />
            </svg>
        ),
        title: 'Digital Signage & Contenidos',
        description: 'Soluciones completas de comunicación digital para el punto de venta: pantallas profesionales, software de gestión de contenidos y soporte técnico continuado. Transformamos espacios físicos en experiencias interactivas.',
        capabilities: [
            'Pantallas LED y LCD profesionales',
            'Software de gestión de contenidos (CMS)',
            'Creación de contenido audiovisual',
            'Instalación y configuración',
            'Soporte técnico y mantenimiento',
            'Analítica y métricas de impacto',
        ],
    },
];

/* ===== Differentiators ===== */
const differentiators = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" />
            </svg>
        ),
        title: 'Presencia Internacional',
        description: 'Oficinas operativas en España y China que nos permiten gestionar importaciones y producción directamente, sin intermediarios.',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M12 6V12L16 14" />
            </svg>
        ),
        title: 'Respuesta en 24h',
        description: 'Nos comprometemos a responder a cualquier solicitud de presupuesto en un máximo de 24 horas laborables.',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" /><circle cx="9" cy="7" r="4" /><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" /><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
            </svg>
        ),
        title: 'Equipo Multidisciplinar',
        description: 'Diseñadores, project managers, ingenieros de producción y logísticos trabajando juntos bajo un mismo techo.',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
            </svg>
        ),
        title: 'Control de Calidad Integral',
        description: 'Supervisamos cada fase del proyecto: materiales, color, acabados y entrega. Sin sorpresas.',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" /><path d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12" />
            </svg>
        ),
        title: 'Servicio Integral',
        description: 'Un único proveedor para todas tus necesidades de marketing en el punto de venta. Simplificamos tu gestión.',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" /><path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" />
            </svg>
        ),
        title: 'Presupuesto Sin Compromiso',
        description: 'Te enviamos una propuesta detallada y transparente. Sin costes ocultos, sin letras pequeñas.',
    },
];

/* ===== Process Steps ===== */
const processSteps = [
    {
        number: '01',
        title: 'Briefing & Análisis',
        description: 'Escuchamos tus necesidades, analizamos tu marca, tu mercado y tu competencia para entender el contexto completo del proyecto.',
    },
    {
        number: '02',
        title: 'Propuesta Estratégica',
        description: 'Nuestro equipo multidisciplinar diseña una solución a medida, alineada con tus objetivos de marketing y tu presupuesto.',
    },
    {
        number: '03',
        title: 'Producción & Control',
        description: 'Gestionamos la producción de principio a fin, con controles de calidad en cada fase y comunicación constante contigo.',
    },
    {
        number: '04',
        title: 'Entrega & Seguimiento',
        description: 'Coordinamos la logística y la instalación si es necesaria. Hacemos seguimiento post-entrega para asegurar tu total satisfacción.',
    },
];

const KnowHow = () => {
    const navigate = useNavigate();

    // Counters will animate on scroll
    const clients = useCountUp(50, 2000);
    const projects = useCountUp(500, 2500);

    return (
        <div className="knowhow">
            <div className="knowhow__container container">

                {/* ===== Hero/Header ===== */}
                <motion.div
                    className="knowhow__header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.span className="knowhow__label" custom={0} variants={fadeUp}>
                        Nuestro Know-How
                    </motion.span>
                    <motion.h1 className="knowhow__title" custom={1} variants={fadeUp}>
                        Experiencia real en{' '}
                        <span className="text-yellow">Retail & Trade Marketing</span>
                    </motion.h1>
                </motion.div>

                {/* ===== Stats ===== */}
                <div className="knowhow__stats" ref={clients.ref}>
                    <div className="knowhow__stat">
                        <div className="knowhow__stat-number">{clients.count}+</div>
                        <div className="knowhow__stat-label">Clientes activos</div>
                    </div>
                    <div className="knowhow__stat" ref={projects.ref}>
                        <div className="knowhow__stat-number">{projects.count}+</div>
                        <div className="knowhow__stat-label">Proyectos entregados</div>
                    </div>
                    <div className="knowhow__stat">
                        <div className="knowhow__stat-number">24h</div>
                        <div className="knowhow__stat-label">Tiempo de respuesta</div>
                    </div>
                    <div className="knowhow__stat">
                        <div className="knowhow__stat-number">2</div>
                        <div className="knowhow__stat-label">Sedes (España + China)</div>
                    </div>
                </div>

                {/* ===== Expertise Areas ===== */}
                <motion.div
                    className="knowhow__expertise"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            className="knowhow__expertise-card"
                            custom={index}
                            variants={fadeUp}
                        >
                            <div className="knowhow__expertise-icon">
                                {area.icon}
                            </div>
                            <h3 className="knowhow__expertise-title">{area.title}</h3>
                            <p className="knowhow__expertise-description">{area.description}</p>
                            <div className="knowhow__expertise-tags">
                                {area.capabilities.map((cap, i) => (
                                    <span key={i} className="knowhow__expertise-tag">{cap}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ===== Process ===== */}
                <motion.div
                    className="knowhow__differentiators"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <motion.div className="knowhow__diff-header" custom={0} variants={fadeUp}>
                        <h3>Cómo trabajamos</h3>
                        <p>
                            Un enfoque metodológico basado en la cercanía con el cliente y el control total de la producción. Desde el análisis inicial hasta la entrega final, cada detalle importa.
                        </p>
                    </motion.div>
                    <div className="knowhow__diff-list">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="knowhow__diff-item"
                                custom={index + 1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="knowhow__diff-icon" style={{ background: 'var(--primary-yellow)', color: 'var(--bg-dark)', fontWeight: 700, fontSize: '13px' }}>
                                    {step.number}
                                </div>
                                <div className="knowhow__diff-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ===== Why Us / Differentiators ===== */}
                <motion.div
                    className="knowhow__differentiators"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ marginBottom: '80px' }}
                >
                    <motion.div className="knowhow__diff-header" custom={0} variants={fadeUp}>
                        <h3>Por qué Impact Channel</h3>
                        <p>
                            No somos solo un proveedor, somos un partner de marketing. Combinamos capacidad productiva propia, equipo creativo y una red logística que nos permite abordar cualquier proyecto con garantías.
                        </p>
                    </motion.div>
                    <div className="knowhow__diff-list">
                        {differentiators.map((diff, index) => (
                            <motion.div
                                key={index}
                                className="knowhow__diff-item"
                                custom={index + 1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="knowhow__diff-icon">
                                    {diff.icon}
                                </div>
                                <div className="knowhow__diff-content">
                                    <h4>{diff.title}</h4>
                                    <p>{diff.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ===== CTA ===== */}
                <motion.div
                    className="text-center"
                    style={{ paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-white)' }}>
                        ¿Tienes un proyecto en mente?
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-gray)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
                        Cuéntanos qué necesitas y te proponemos la mejor solución. Sin compromiso.
                    </p>
                    <button
                        onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                        className="btn btn-primary"
                    >
                        Pedir Presupuesto
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default KnowHow;
