import { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: '¿Cuáles son los plazos de entrega habituales?',
        answer: 'Los plazos varían según el tipo de proyecto. Para impresión digital estándar, entre 3-5 días laborables. Proyectos más complejos como merchandising o trade marketing pueden requerir 2-4 semanas dependiendo de la personalización y cantidades.',
    },
    {
        question: '¿Trabajan con empresas de toda España?',
        answer: 'Sí, trabajamos con clientes de toda España y también realizamos proyectos internacionales. Contamos con una red logística que nos permite entregar en cualquier punto del país.',
    },
    {
        question: '¿Cuál es el pedido mínimo para merchandising?',
        answer: 'Depende del producto. Para artículos básicos el mínimo suele ser de 100 unidades, mientras que para productos personalizados puede variar. Contáctanos para un presupuesto personalizado.',
    },
    {
        question: '¿Ofrecen servicio de instalación para cartelería y rótulos?',
        answer: 'Sí, contamos con equipos de instalación profesional en las principales ciudades. Para ubicaciones remotas trabajamos con colaboradores de confianza.',
    },
    {
        question: '¿Qué garantía tienen los productos de Digital Signage?',
        answer: 'Nuestras pantallas profesionales tienen garantía de 2 años. Para el software de gestión de contenidos ofrecemos soporte técnico continuo y actualizaciones incluidas.',
    },
    {
        question: '¿Pueden ayudar con el diseño si no tenemos creatividades?',
        answer: 'Por supuesto. Contamos con un equipo de diseño gráfico que puede desarrollar todas las creatividades que necesites, desde adaptaciones hasta proyectos completos desde cero.',
    },
    {
        question: '¿Cómo funciona el proceso de presupuesto?',
        answer: 'Envíanos tu consulta a través del formulario o llámanos. Te responderemos en 24-48h con un presupuesto detallado sin compromiso. Para proyectos complejos, podemos agendar una reunión para conocer mejor tus necesidades.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="know-how" className="faq section-dark">
            <div className="faq__container container">
                <div className="faq__header">
                    <h2 className="faq__title">
                        Preguntas<br />
                        <span className="text-yellow">frecuentes</span>
                    </h2>
                </div>

                <div className="faq__list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
                                <span className="faq__question-text">{faq.question}</span>
                            </button>
                            <div className="faq__answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
