import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  note: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, note }: ImageModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full bg-background rounded-sm animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gallery-text-muted transition-colors duration-200 z-10"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="mt-4 pt-4 border-t border-gallery-border">
            <p className="text-sm text-gallery-text-muted tracking-wide">
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;