'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

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
        <section id="proceso" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Large amber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-10"
                style={{ background: 'radial-gradient(circle, #FFB800 0%, transparent 60%)' }}
            />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="w-12 h-[3px] bg-[#FFB800] mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            Nuestro <span className="text-[#FFB800] drop-shadow-[0_0_20px_rgba(255,184,0,0.5)]">proceso</span> de trabajo
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#A0A0A0] text-lg max-w-2xl mx-auto"
                        >
                            Metodología propia de <span className="text-[#FFB800] font-medium">agencia de activación de marca</span>. Controlamos todo el proceso de principio a fin.
                        </motion.p>
                    </div>

                    {/* Steps with amber connecting line */}
                    <div className="relative">
                        {/* Vertical amber line (desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFB800]/40 via-[#FFB800]/20 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FFB800]/30 transition-all duration-500 hover:bg-[#FFB800]/[0.03] hover:shadow-[0_0_30px_rgba(255,184,0,0.06)]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,184,0,0.3)]"
                                            style={{ background: 'linear-gradient(135deg, rgba(255,184,0,0.25), rgba(255,140,0,0.1))', border: '1px solid rgba(255,184,0,0.3)', color: '#FFB800' }}
                                        >
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FFB800] transition-colors">{step.title}</h3>
                                            <p className="text-[#A0A0A0] text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Button
                            className="rounded-full px-8 h-12 text-base font-bold transition-all duration-300 group text-[#0A0A0A] shadow-[0_4px_14px_0_rgba(255,184,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.5)]"
                            style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}
                            onClick={() => {
                                const el = document.getElementById('contacto');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Solicitar Presupuesto
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
