'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
    Printer,
    Store,
    BarChart3,
    MonitorPlay,
    Lightbulb,
    Headset
} from 'lucide-react';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const items = [
        {
            title: "Producción Gráfica & Gran Formato",
            description: "Impresión de alto impacto. Gran formato, rotulación y materiales PLV sostenibles.",
            header: <SkeletonOne />,
            icon: <Printer className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-2",
        },
        {
            title: "Merchandising Estratégico",
            description: "Objetos promocionales que cuentan historias. Diseño y producción.",
            header: <SkeletonTwo />,
            icon: <Store className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-1",
        },
        {
            title: "Consultoría de Punto de Venta",
            description: "Auditamos y optimizamos cada metro cuadrado para vender más.",
            header: <SkeletonThree />,
            icon: <BarChart3 className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-1",
        },
        {
            title: "Digital Signage 360º",
            description: "Pantallas LED y gestión de contenidos dinámica para retail.",
            header: <SkeletonFour />,
            icon: <MonitorPlay className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-2",
        },
        {
            title: "Innovación & Proyectos Ad-hoc",
            description: "Ingeniería creativa. Mobiliario comercial y experiencias a medida.",
            header: <SkeletonFive />,
            icon: <Lightbulb className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-1",
        },
        {
            title: "Customer Services",
            description: "Soporte dedicado 24/7 y gestión logística integral.",
            header: <SkeletonSix />,
            icon: <Headset className="h-6 w-6 text-primary group-hover/bento:text-yellow-400 transition-colors" />,
            className: "md:col-span-1 md:col-start-3",
        },
    ];

    return (
        <section id="servicios" className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Yellow Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Soluciones <span className="text-primary drop-shadow-[0_0_15px_rgba(245,166,35,0.4)]">Integrales</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Combinamos creatividad, tecnología y producción para transformar tu presencia en el punto de venta.
                    </motion.p>
                </div>

                <div ref={ref}>
                    <BentoGrid className="max-w-6xl mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={item.className}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </section>
    );
};

// --- Visual Skeletons with Yellow Accents ---

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-900 border border-neutral-200 dark:border-white/5 relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                <div className="text-primary/20 font-black text-6xl tracking-tighter">CMYK</div>
            </div>
        </div>
    </div>
);

const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden group border border-neutral-200 dark:border-white/5">
        <div className="absolute inset-0 flex items-center justify-center gap-2">
            <div className="w-8 h-16 bg-primary/20 rounded-md group-hover:h-20 transition-all duration-300"></div>
            <div className="w-8 h-12 bg-primary/40 rounded-md group-hover:h-16 transition-all duration-300 delay-75"></div>
            <div className="w-8 h-20 bg-primary/60 rounded-md group-hover:h-24 transition-all duration-300 delay-150"></div>
        </div>
    </div>
);

const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 flex flex-col justify-end p-4 group border border-neutral-200 dark:border-white/5 overflow-hidden">
        <div className="absolute top-4 right-4 text-primary font-bold text-xs uppercase tracking-widest opacity-50">Analytics</div>
        <div className="space-y-2">
            <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[70%] group-hover:w-[85%] transition-all duration-500"></div>
            </div>
            <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 w-[50%] group-hover:w-[65%] transition-all duration-500 delay-100"></div>
            </div>
        </div>
    </div>
);

const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black relative overflow-hidden group border border-neutral-800">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Screen Glitch Effect Simulation */}
            <div className="w-[90%] h-[80%] bg-neutral-900 rounded border border-neutral-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent w-[200%] h-full animate-shine opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-mono text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    DIGITAL<br />IMPACT
                </div>
            </div>
        </div>
    </div>
);

const SkeletonFive = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden group border border-neutral-200 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
            </div>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] text-primary/60 font-mono">R&D LAB</div>
    </div>
);

const SkeletonSix = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 to-transparent p-4 flex items-center justify-center relative overflow-hidden border border-primary/20 group">
        <div className="relative z-10 flex flex-col items-center">
            <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">24/7</div>
            <div className="text-[10px] uppercase tracking-wider text-primary font-bold mt-1">Soporte</div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all"></div>
    </div>
);

export default Services;
