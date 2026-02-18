'use client';
import { useRef, useState } from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const Hero = () => {
    const [isShockwave, setIsShockwave] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCollision = () => {
        setIsShockwave(true);
        setTimeout(() => setIsShockwave(false), 500);
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground pt-20 pb-20">
            <BackgroundBeamsWithCollision
                className="absolute inset-0 z-0 h-full w-full"
                interactiveRef={buttonRef}
                onCollision={handleCollision}
            >
                <div className="hidden"></div>
            </BackgroundBeamsWithCollision>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#F5A623]"></span>
                        <span className="text-primary text-sm font-bold tracking-wide uppercase">Agencia Trade Marketing Madrid</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        Expertos en <span className="text-primary drop-shadow-[0_0_25px_rgba(245,166,35,0.4)]">Fabricación PLV</span> y Retail Marketing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
                    >
                        We want to be your marketing partner. Acompañamos a marcas y retailers en el desarrollo y ejecución de proyectos de impresión, merchandising y digital signage.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button
                            ref={buttonRef}
                            size="lg"
                            className={cn("bg-primary text-background hover:bg-primary/90 font-bold text-lg px-8 h-14 rounded-full shadow-[0_4px_14px_0_rgba(245,166,35,0.39)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.23)] hover:-translate-y-1 transition-all duration-200", isShockwave ? 'shadow-[0_0_30px_rgba(255,184,0,0.6)]' : '')}
                            onClick={() => scrollToSection('contacto')}
                        >
                            Pedir Presupuesto
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 h-14 rounded-full border-white/10 hover:bg-white/5 hover:text-primary transition-colors"
                            onClick={() => scrollToSection('servicios')}
                        >
                            Ver Servicios
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <span>Sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>Respuesta en 24h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Calidad garantizada</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
