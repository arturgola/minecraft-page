import { useState } from "react";
import ImageModal from "./ImageModal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  note: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gallery1,
    alt: "Coffee beans being poured",
    note: "Vintage brass scoop with premium coffee beans showcasing the artisanal process of coffee selection and preparation."
  },
  {
    src: gallery2,
    alt: "Hands holding ceramic cup with latte art",
    note: "The intimate moment of enjoying a carefully crafted latte, highlighting the personal connection between barista and customer."
  },
  {
    src: gallery3,
    alt: "Vintage coffee brewing equipment",
    note: "Traditional brewing equipment representing the timeless craft of coffee making and the pursuit of perfect extraction."
  },
  {
    src: gallery4,
    alt: "Coffee roasting machine with beans",
    note: "Industrial coffee roasting equipment demonstrating the transformation of green beans into aromatic roasted coffee."
  },
  {
    src: gallery5,
    alt: "Coffee cupping session setup",
    note: "Professional coffee cupping arrangement for tasting and evaluating different coffee origins and roast profiles."
  },
  {
    src: gallery6,
    alt: "Coffee shop interior atmosphere",
    note: "The contemplative space of a modern coffee shop where community and craftsmanship intersect."
  }
];

const RightImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center h-full bg-background p-4 overflow-hidden">
        <div className="flex flex-col space-y-4 animate-slide-down">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group animate-gallery-float"
              style={{ animationDelay: `${index * 0.8}s` }}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-24 h-20 object-cover border border-gallery-border hover:border-gallery-text transition-all duration-300 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <span className="text-xs text-gallery-text-muted font-light tracking-widest">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          note={selectedImage.note}
        />
      )}
    </>
  );
};

export default RightImageGallery;