'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '¿Son fabricantes de PLV en Madrid?',
        answer: 'Sí, somos fabricantes de PLV en Madrid con taller propio. Diseñamos y producimos expositores de cartón a medida, metal y madera, garantizando calidad y plazos ajustados.',
    },
    {
        question: '¿Qué servicios de impresión ofrecen?',
        answer: 'Ofrecemos impresión gran formato en Alcobendas y toda la Comunidad de Madrid. Desde lonas y vinilos hasta producción de elementos visuales para retail de alto impacto.',
    },
    {
        question: '¿Realizan la instalación de los elementos?',
        answer: 'Por supuesto. Nuestro equipo se encarga de la instalación de vinilos en punto de venta en Madrid y el montaje de mobiliario. También actuamos como empresas de señalética en Madrid para oficinas y comercios.',
    },
    {
        question: '¿Ofrecen servicios de Gestión de Punto de Venta (GPV)?',
        answer: 'Sí, como empresa de Trade Marketing en Madrid, ofrecemos servicios de Gestión del Punto de Venta (GPV) para asegurar que tu producto esté siempre perfecto en el lineal.',
    },
    {
        question: '¿Hacen regalos corporativos y merchandising?',
        answer: 'Somos especialistas en merchandising para empresas en Madrid y regalos corporativos personalizados. Gestionamos desde el diseño hasta la importación y entrega final.',
    },
    {
        question: '¿Tienen soluciones de tecnología para retail?',
        answer: 'Sí, implantamos proyectos de Digital Signage para retail en Madrid, incluyendo pantallas, gestión de contenidos y mantenimiento técnico 360º.',
    },
    {
        question: '¿Realizan diseño de stands para ferias?',
        answer: 'Sí, contamos con un departamento especializado en diseño de stands y expositores en Madrid para ferias, eventos y activaciones de marca.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Amber glow - bigger and brighter */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
                style={{ background: 'radial-gradient(circle, #FFB800 0%, transparent 70%)' }}
            />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
                style={{ background: 'radial-gradient(circle, #FF8C00 0%, transparent 70%)' }}
            />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header with amber accent line */}
                    <div className="text-center mb-16">
                        <div className="w-12 h-[3px] bg-[#FFB800] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            Preguntas <span className="text-[#FFB800] drop-shadow-[0_0_20px_rgba(255,184,0,0.5)]">frecuentes</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#A0A0A0] text-lg"
                        >
                            Todo lo que necesitas saber sobre nuestros servicios
                        </motion.p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? 'border-[#FFB800]/40 bg-[#FFB800]/[0.05] shadow-[0_0_30px_rgba(255,184,0,0.08)]'
                                        : 'border-white/[0.06] bg-white/[0.02] hover:border-[#FFB800]/20'
                                    }`}
                            >
                                <button
                                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`text-base font-medium transition-colors ${openIndex === index ? 'text-[#FFB800]' : 'text-white group-hover:text-[#FFB800]'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-colors ${openIndex === index ? 'text-[#FFB800]' : 'text-[#555]'
                                            }`} />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 border-t border-[#FFB800]/10">
                                                <p className="text-[#A0A0A0] leading-relaxed pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
