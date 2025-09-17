import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  note: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  note: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/src/assets/gallery-1.jpg",
    alt: "Coffee beans being poured",
    note: "Vintage brass scoop with premium coffee beans showcasing the artisanal process of coffee selection and preparation."
  },
  {
    src: "/src/assets/gallery-2.jpg", 
    alt: "Hands holding ceramic cup with latte art",
    note: "The intimate moment of enjoying a carefully crafted latte, highlighting the personal connection between barista and customer."
  },
  {
    src: "/src/assets/gallery-3.jpg",
    alt: "Vintage coffee brewing equipment", 
    note: "Traditional brewing equipment representing the timeless craft of coffee making and the pursuit of perfect extraction."
  },
  {
    src: "/src/assets/gallery-4.jpg",
    alt: "Coffee roasting machine with beans",
    note: "Industrial coffee roasting equipment demonstrating the transformation of green beans into aromatic roasted coffee."
  },
  {
    src: "/src/assets/gallery-5.jpg",
    alt: "Coffee cupping session setup",
    note: "Professional coffee cupping arrangement for tasting and evaluating different coffee origins and roast profiles."
  },
  {
    src: "/src/assets/gallery-6.jpg",
    alt: "Coffee shop interior atmosphere",
    note: "The contemplative space of a modern coffee shop where community and craftsmanship intersect."
  }
];

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

  const imageIndex = galleryImages.findIndex(img => img.src === imageSrc) + 1;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
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
        
        <div className="relative">
          <div className="absolute -top-6 left-0 text-xs text-gallery-text-muted font-light tracking-widest">
            [{String(imageIndex).padStart(2, '0')}]
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-4xl max-h-[70vh] object-contain"
          />
          <div className="mt-4">
            <p className="text-sm text-gallery-text-muted tracking-wide max-w-4xl">
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;