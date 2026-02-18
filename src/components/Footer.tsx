'use client';
import { useState } from 'react';
import Image from 'next/image';
import LegalModal from './LegalModal';
import { siteConfig } from '@/config/site';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openLegal = (type: 'privacy' | 'legal' | 'cookies') => {
        setModalOpen(true);
        switch (type) {
            case 'legal':
                setModalTitle('Aviso Legal');
                setModalContent(
                    <>
                        <p><strong>1. Datos Identificativos</strong></p>
                        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es Impact Channel (en adelante Impact Channel), con domicilio a estos efectos en Av. Fuente Nueva, 14, Nave 19A, 28703 San Sebastián de los Reyes, Madrid.</p>
                        <p><strong>2. Usuarios</strong></p>
                        <p>El acceso y/o uso de este portal de Impact Channel atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
                        <p><strong>3. Uso del Portal</strong></p>
                        <p>El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, &quot;los contenidos&quot;) en Internet pertenecientes a Impact Channel o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
                    </>
                );
                break;
            case 'privacy':
                setModalTitle('Política de Privacidad');
                setModalContent(
                    <>
                        <p><strong>1. Responsable del Tratamiento</strong></p>
                        <p>Impact Channel se compromete a proteger y respetar su privacidad. Esta política establece la base sobre la cual procesaremos cualquier dato personal que recopilemos de usted, o que usted nos proporcione.</p>
                        <p><strong>2. Información que recopilamos</strong></p>
                        <p>Podemos recopilar y procesar los siguientes datos sobre usted: Información que proporciona al completar formularios en nuestro sitio, suscribirse a nuestros servicios o solicitar más servicios.</p>
                        <p><strong>3. Finalidad del tratamiento</strong></p>
                        <p>Utilizamos la información que tenemos sobre usted para proporcionarle información, productos o servicios que nos solicite o que consideremos que pueden interesarle.</p>
                    </>
                );
                break;
            case 'cookies':
                setModalTitle('Política de Cookies');
                setModalContent(
                    <>
                        <p><strong>¿Qué son las cookies?</strong></p>
                        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>
                        <p><strong>Tipos de cookies utilizadas</strong></p>
                        <ul>
                            <li>Cookies técnicas: Son aquellas que permiten al usuario la navegación a través de una página web.</li>
                            <li>Cookies de análisis: Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios.</li>
                        </ul>
                    </>
                );
                break;
        }
    };

    return (
        <>
            <footer className="py-16 bg-[#050505] relative overflow-hidden">
                {/* Top amber accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB800]/50 to-transparent" />

                {/* Ambient background text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[20vw] font-black tracking-tighter leading-none"
                        style={{ color: 'rgba(255, 184, 0, 0.03)' }}
                    >IMPACT</span>
                </div>

                {/* Small amber glow */}
                <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10"
                    style={{ background: 'radial-gradient(circle, #FFB800 0%, transparent 70%)' }}
                />

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* Logo & Description */}
                        <div>
                            <Image
                                src="/images/logo-full.png"
                                alt="Impact Channel"
                                width={120}
                                height={48}
                                className="h-10 w-auto object-contain mb-4"
                            />
                            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                                Especialistas en Retail & Trade Marketing. Llevamos tu marca al siguiente nivel.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.15em] mb-4">Secciones</h4>
                            <ul className="space-y-3">
                                {['Inicio', 'Servicios', 'Know-How', 'Contacto'].map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => {
                                                if (item === 'Servicios') window.location.href = '/services';
                                                else if (item === 'Know-How') window.location.href = '/know-how';
                                                else scrollToSection(item.toLowerCase());
                                            }}
                                            className="text-[#888] hover:text-[#FFB800] transition-colors text-sm"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.15em] mb-4">Contacto</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
                                    <p className="text-[#888] text-sm leading-relaxed">
                                        {siteConfig.contact.address.street}<br />
                                        {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
                                        {siteConfig.contact.address.province}, {siteConfig.contact.address.country}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                                    <a href={siteConfig.contact.phoneHref} className="text-[#888] hover:text-[#FFB800] transition-colors text-sm">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#FFB800] shrink-0" />
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[#888] hover:text-[#FFB800] transition-colors text-sm">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-[#FFB800]/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-[#555]">
                            &copy; {new Date().getFullYear()} Impact Channel. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <button onClick={() => openLegal('legal')} className="text-xs text-[#555] hover:text-[#FFB800] transition-colors">Aviso Legal</button>
                            <button onClick={() => openLegal('privacy')} className="text-xs text-[#555] hover:text-[#FFB800] transition-colors">Política de Privacidad</button>
                            <button onClick={() => openLegal('cookies')} className="text-xs text-[#555] hover:text-[#FFB800] transition-colors">Cookies</button>
                        </div>
                    </div>
                </div>
            </footer>

            <LegalModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalTitle}
                content={modalContent}
            />
        </>
    );
};

export default Footer;
