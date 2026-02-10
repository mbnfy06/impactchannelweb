import ContactSection from '../components/ContactSection';
import '../components/ContactSection.css'; // Ensure CSS is loaded

const Contact = () => {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <ContactSection />
        </div>
    );
};

export default Contact;
