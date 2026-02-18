'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
// import './ContactSection.css'; // Deprecated in favor of Tailwind

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const params = new URLSearchParams();
            params.append('nombre', formData.nombre);
            params.append('empresa', formData.empresa);
            params.append('email', formData.email);
            // Ensure phone is treated as string in sheet
            params.append('telefono', "'" + formData.telefono);
            params.append('servicio', formData.servicio);
            params.append('mensaje', formData.mensaje);

            // Google Apps Script URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzMtzMCyaGL58hCVAsz4bx4msc3GhZAWIDPMAytdsKP7RAfd3lvYAC-ZCyUJ4atbs_uNA/exec';

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: params,
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            setStatus('success');
            setFormData({
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                servicio: '',
                mensaje: '',
            });
            // alert('¡Mensaje enviado con éxito! Te contactaremos pronto.'); // Custom UI feedback is better
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="contacto" className="relative pt-32 pb-20 bg-neutral-50 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-neutral-200/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-16 items-start"
                >
                    {/* Left Column: Info */}
                    <motion.div variants={fadeInUp} className="space-y-12">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
                                Hablemos de tu <br />
                                <span className="text-yellow-500">próximo proyecto</span>
                            </h2>
                            <p className="text-xl text-neutral-500 max-w-lg leading-relaxed">
                                Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo en 24-48 horas. Sin compromiso.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Item */}
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-white shadow-sm border border-neutral-100 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-neutral-900 mb-1">Llámanos</h4>
                                    <a href={siteConfig.contact.phoneHref} className="text-neutral-600 hover:text-yellow-600 transition-colors text-lg block">
                                        {siteConfig.contact.phone}
                                    </a>
                                    <span className="text-sm text-neutral-400 mt-1 block">Lunes a Viernes, 9:00 - 18:00</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-white shadow-sm border border-neutral-100 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-neutral-900 mb-1">Escríbenos</h4>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-neutral-600 hover:text-yellow-600 transition-colors text-lg block">
                                        {siteConfig.contact.email}
                                    </a>
                                    <span className="text-sm text-neutral-400 mt-1 block">Respondemos en menos de 24h</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-white shadow-sm border border-neutral-100 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-neutral-900 mb-1">Visítanos</h4>
                                    <p className="text-neutral-600 text-lg leading-relaxed">
                                        {siteConfig.contact.address.street}<br />
                                        {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
                                        {siteConfig.contact.address.province}, {siteConfig.contact.address.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-neutral-200/50 p-8 md:p-10 border border-neutral-100 relative overflow-hidden">
                            {/* Success Overlay */}
                            {status === 'success' && (
                                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">¡Mensaje enviado!</h3>
                                    <p className="text-neutral-500">Gracias por contactar con nosotros. Te responderemos lo antes posible.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-8 px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Solicitar Presupuesto</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-700 ml-1">Nombre *</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-neutral-400"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-700 ml-1">Empresa *</label>
                                        <input
                                            type="text"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-neutral-400"
                                            placeholder="Tu empresa"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-700 ml-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-neutral-400"
                                            placeholder="nombre@ejemplo.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-700 ml-1">Teléfono</label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-neutral-400"
                                            placeholder="+34..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700 ml-1">Servicio de interés</label>
                                    <div className="relative">
                                        <select
                                            name="servicio"
                                            value={formData.servicio}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            <option value="global-marketing">Global Marketing</option>
                                            <option value="digital-printing">Digital Printing</option>
                                            <option value="promotional-gifts">Promotional Gifts</option>
                                            <option value="adhoc-development">Ad-hoc Development</option>
                                            <option value="trade-marketing">Trade Marketing</option>
                                            <option value="digital-signage">Digital Signage</option>
                                            <option value="corporate-design">Corporate Design</option>
                                            <option value="digital-development">Digital Development</option>
                                            <option value="customer-services">Customer Services</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700 ml-1">Mensaje *</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-neutral-400 resize-none"
                                        placeholder="Cuéntanos más sobre tu proyecto..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 px-6 bg-neutral-900 text-white rounded-xl font-semibold text-lg hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-200 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-neutral-900/20"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <span>Enviar mensaje</span>
                                    )}
                                </button>
                                <p className="text-xs text-center text-neutral-400 pt-2">
                                    Al enviar este formulario aceptas nuestra política de privacidad.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Separator and Map Label */}
            <div className="container mx-auto px-6 mt-32 mb-12">
                <div className="flex items-center space-x-4 opacity-30">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neutral-500"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">Encuéntranos</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neutral-500"></div>
                </div>
            </div>

            {/* Map Section - Contained and Minimal */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-100"
                >
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&height=100%25&hl=es&q=Av.%20Fuente%20Nueva,%2014,%20Nave%2019A,%2028703%20San%20Sebasti%C3%A1n%20de%20los%20Reyes,%20Madrid+(Impact%20Channel)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
