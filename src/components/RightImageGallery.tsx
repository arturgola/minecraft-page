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
    note: "Vintage brass scoop with premium coffee beans showcasing the artisanal process of coffee selection and preparation.",
  },
  {
    src: gallery2,
    alt: "Hands holding ceramic cup with latte art",
    note: "The intimate moment of enjoying a carefully crafted latte, highlighting the personal connection between barista and customer.",
  },
  {
    src: gallery3,
    alt: "Vintage coffee brewing equipment",
    note: "Traditional brewing equipment representing the timeless craft of coffee making and the pursuit of perfect extraction.",
  },
  {
    src: gallery4,
    alt: "Coffee roasting machine with beans",
    note: "Industrial coffee roasting equipment demonstrating the transformation of green beans into aromatic roasted coffee.",
  },
  {
    src: gallery5,
    alt: "Coffee cupping session setup",
    note: "Professional coffee cupping arrangement for tasting and evaluating different coffee origins and roast profiles.",
  },
  {
    src: gallery6,
    alt: "Coffee shop interior atmosphere",
    note: "The contemplative space of a modern coffee shop where community and craftsmanship intersect.",
  },
];

const RightImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    number: string;
  } | null>(null);

  // Convert galleryImages to include number strings like '01', '02', ...
  const images = galleryImages.map((g, idx) => ({
    src: g.src,
    number: String(idx + 1).padStart(2, "0"),
  }));

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden h-full bg-background p-4">
      <div className="animate-scroll-vertical-reverse flex flex-col items-end w-full pr-4">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex items-center mb-1 last:mb-0">
            <img
              src={image.src}
              alt={`Coffee image ${image.number}`}
              className="w-16 h-16 object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(image)}
            />
            <div
              className="poster-text text-xs opacity-60 ml-1 flex-shrink-0"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {image.number}
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src ?? ""}
        imageAlt={selectedImage ? `Coffee image ${selectedImage.number}` : ""}
        note={""}
      />
    </div>
  );
};

export default RightImageGallery;
