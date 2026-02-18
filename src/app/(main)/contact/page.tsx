import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Solicita presupuesto sin compromiso. Nuestro equipo se pondrá en contacto contigo en 24-48 horas.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <ContactSection />
        </div>
    );
}
