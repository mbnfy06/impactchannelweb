import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
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
        <div id="contacto" className="contact-form">
            <div className="contact-form__header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Solicita información</span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form__form">
                <div className="contact-form__row">
                    <div className="contact-form__field">
                        <label className="contact-form__label">
                            Nombre <span className="contact-form__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            className="contact-form__input"
                            required
                        />
                    </div>
                    <div className="contact-form__field">
                        <label className="contact-form__label">
                            Empresa <span className="contact-form__required">*</span>
                        </label>
                        <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            placeholder="Nombre de tu empresa"
                            className="contact-form__input"
                            required
                        />
                    </div>
                </div>

                <div className="contact-form__row">
                    <div className="contact-form__field">
                        <label className="contact-form__label">
                            Email <span className="contact-form__required">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@empresa.com"
                            className="contact-form__input"
                            required
                        />
                    </div>
                    <div className="contact-form__field">
                        <label className="contact-form__label">Teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="+34 600 000 000"
                            className="contact-form__input"
                        />
                    </div>
                </div>

                <div className="contact-form__field">
                    <label className="contact-form__label">Servicio de interés</label>
                    <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="contact-form__select"
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

                <div className="contact-form__field">
                    <label className="contact-form__label">
                        Mensaje <span className="contact-form__required">*</span>
                    </label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos tu proyecto o necesidad..."
                        className="contact-form__textarea"
                        rows={4}
                        required
                    />
                </div>

                <div className="contact-form__footer">
                    <button type="submit" className="btn btn-primary contact-form__submit">
                        Enviar mensaje
                    </button>
                    <span className="contact-form__note">
                        Sin compromiso · Llámanos: (+34) 91 805 34 00
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
