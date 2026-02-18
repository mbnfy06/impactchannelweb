import type { Metadata } from 'next';
import KnowHow from '@/components/KnowHow';

export const metadata: Metadata = {
    title: 'Know-How',
    description: 'Nuestro expertise en impresión, merchandising, trade marketing y digital signage. Más de 500 proyectos entregados y 50 clientes activos.',
};

export default function KnowHowPage() {
    return (
        <div className="min-h-screen bg-[var(--bg-dark)]">
            <KnowHow />
        </div>
    );
}
