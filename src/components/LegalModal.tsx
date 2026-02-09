import { useEffect } from 'react';
import './LegalModal.css';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" onClick={onClose}>
            <div className="legal-modal" onClick={e => e.stopPropagation()}>
                <button className="legal-modal-close" onClick={onClose}>&times;</button>
                <div className="legal-modal-header">
                    <h2>{title}</h2>
                </div>
                <div className="legal-modal-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
