import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('¡Gracias! Te responderemos en 24-48h.');
    };

    return (
        <section id="contacto" className="contact-section">
            <div className="contact-section__container container">
                <div className="contact-section__header">
                    <h2 className="contact-section__title">Contacta con nosotros</h2>
                    <p className="contact-section__subtitle">
                        ¿Tienes un proyecto en mente? Cuéntanos qué necesitas y te ayudamos a hacerlo realidad. Sin compromiso.
                    </p>
                </div>

                <div className="contact-section__grid">
                    {/* Left Column: Contact Info */}
                    <div className="contact-section__info">
                        <h3 className="contact-section__info-title">Información de contacto</h3>

                        <div className="contact-section__details">
                            <div className="contact-section__item">
                                <div className="contact-section__icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="contact-section__label">Teléfono</h4>
                                    <a href="tel:+34918053400" className="contact-section__value">+34 91 805 34 00</a>
                                </div>
                            </div>

                            <div className="contact-section__item">
                                <div className="contact-section__icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h4 className="contact-section__label">Email</h4>
                                    <a href="mailto:info@impactchannel.es" className="contact-section__value">info@impactchannel.es</a>
                                </div>
                            </div>

                            <div className="contact-section__item">
                                <div className="contact-section__icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 className="contact-section__label">Dirección</h4>
                                    <p className="contact-section__value">
                                        Av. Fuente Nueva, 14, Nave 19A<br />
                                        28703 San Sebastián de los Reyes<br />
                                        Madrid, España
                                    </p>
                                </div>
                            </div>

                            <div className="contact-section__item">
                                <div className="contact-section__icon-wrapper">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div>
                                    <h4 className="contact-section__label">Horario</h4>
                                    <p className="contact-section__value">
                                        Lunes a Viernes<br />
                                        9:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-section__actions">
                            <a href="tel:+34918053400" className="btn btn-primary btn--block">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Llamar ahora
                            </a>
                            <a href="mailto:info@impactchannel.es" className="btn btn-secondary btn--block">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Enviar email
                            </a>
                        </div>
                    </div>

                    {/* Right Column: API Form */}
                    <div className="contact-section__form-wrapper">
                        <div className="contact-section__form-header">
                            <h3>Solicita tu presupuesto</h3>
                            <p>Rellena el formulario y te responderemos en 24-48 horas. Sin compromiso.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-section__form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Nombre *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        placeholder="Tu nombre completo"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Empresa *</label>
                                    <input
                                        type="text"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        placeholder="Nombre de tu empresa"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="tu@empresa.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        placeholder="+34 600 000 000"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Servicio de interés</label>
                                <select
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
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
                            </div>

                            <div className="form-group">
                                <label>Mensaje *</label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder="Cuéntanos tu proyecto o necesidad..."
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                                <span className="form-note">Sin compromiso · Respondemos en 24-48h</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-section__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.558356230635!2d-3.626456023533965!3d40.5292270714214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422bc7f59d5b71%3A0x6b784821d50c1822!2sAv.%20de%20Fuente%20Nueva%2C%2014%2C%2028703%20San%20Sebasti%C3%A1n%20de%20los%20Reyes%2C%20Madrid!5e0!3m2!1ses!2ses!4v1707498765432!5m2!1ses!2ses"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactSection;
