import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesCards from '@/components/ServicesCards';
import ProcessSection from '@/components/ProcessSection';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Impact Channel | Agencia de Trade Marketing y PLV en Madrid',
    description: 'Expertos en Retail y Trade Marketing en Madrid. Diseño y fabricación de PLV, merchandising, impresión gran formato y digital signage para marcas líderes.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <ClientsCarousel />
            <ServicesCards />
            <ProcessSection />
            <FAQ />
        </>
    );
}
