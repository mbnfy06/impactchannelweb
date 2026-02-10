import { useState } from 'react';
import './Footer.css';
import logoFull from '../assets/logo-full.png';
import LegalModal from './LegalModal';

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
                        <p>El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Impact Channel o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
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
            <footer className="footer">
                <div className="footer__background-text">IMPACT</div>

                <div className="footer__container container">
                    <div className="footer__grid">
                        <div className="footer__logo-section">
                            <img
                                src={logoFull}
                                alt="Impact Channel"
                                className="footer__logo-img"
                            />
                            <p className="footer__copy-text">
                                Especialistas en Retail & Trade Marketing. Llevamos tu marca al siguiente nivel.
                            </p>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__column-title">Secciones</h4>
                            <ul className="footer__links">
                                <li><button onClick={() => scrollToSection('inicio')} className="footer__link">Inicio</button></li>
                                <li><button onClick={() => { window.location.href = '/services'; }} className="footer__link">Servicios</button></li>
                                <li><button onClick={() => { window.location.href = '/know-how'; }} className="footer__link">Know-How</button></li>
                                <li><button onClick={() => scrollToSection('contacto')} className="footer__link">Contacto</button></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__column-title">Contacto</h4>
                            <div className="footer__contact-info">
                                <div className="footer__contact-item">
                                    <span className="footer__contact-label">Dirección</span>
                                    Av. Fuente Nueva, 14, Nave 19A<br />
                                    28703 San Sebastián de los Reyes<br />
                                    Madrid, España
                                </div>
                                <div className="footer__contact-item">
                                    <span className="footer__contact-label">Teléfono</span>
                                    <a href="tel:+34918053400" className="footer__link">(+34) 91 805 34 00</a>
                                </div>
                                <div className="footer__contact-item">
                                    <span className="footer__contact-label">Email</span>
                                    <a href="mailto:info@impactchannel.es" className="footer__link">info@impactchannel.es</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom-bar">
                        <div className="footer__copyright">
                            &copy; {new Date().getFullYear()} Impact Channel. Todos los derechos reservados.
                        </div>
                        <div className="footer__legal-links">
                            <button onClick={() => openLegal('legal')} className="footer__legal-link">Aviso Legal</button>
                            <button onClick={() => openLegal('privacy')} className="footer__legal-link">Política de Privacidad</button>
                            <button onClick={() => openLegal('cookies')} className="footer__legal-link">Cookies</button>
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
