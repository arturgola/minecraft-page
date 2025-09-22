import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  note: string;
}

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  note,
}: ImageModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const imageNumberMatch = imageAlt.match(/(\d+)$/);
  const imageNumber = imageNumberMatch ? imageNumberMatch[1] : "01";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-gallery-text hover:text-gallery-text-muted transition-colors duration-200 z-10"
        >
          <X size={24} />
        </button>

        <div className="relative flex flex-col items-center">
          <div className="absolute -top-6 left-0 text-xs text-gallery-text-muted font-light tracking-widest">
            [{imageNumber}]
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-4xl max-h-[70vh] object-contain"
          />
          <div className="mt-4 flex justify-center">
            <p className="text-xs text-gallery-text-muted tracking-wide leading-relaxed text-center max-w-xs px-2">
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
