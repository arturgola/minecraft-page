import { useState } from "react";
import ImageModal from "./ImageModal";
import gallery1 from "@/assets/screenshots/gallery-1.png";
import gallery2 from "@/assets/screenshots/gallery-2.png";
import gallery3 from "@/assets/screenshots/gallery-3.png";
import gallery4 from "@/assets/screenshots/gallery-4.jpg";
import gallery5 from "@/assets/screenshots/gallery-5.png";
import gallery6 from "@/assets/screenshots/gallery-6.png";

interface GalleryImage {
  src: string;
  alt: string;
  note: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gallery1,
    alt: "A tall tower made of dirt blocks in Minecraft",
    note: "Woke up to find a tower staring at me like it knew my secrets.",
  },
  {
    src: gallery2,
    alt: "Minecraft villagers gathered around a fence",
    note: "Villagers held a silent meeting; I think they’re plotting against my fence.",
  },
  {
    src: gallery3,
    alt: "A Minecraft character standing on a tall structure",
    note: "Climbed the tall thing just to drop a potato from the top. Felt powerful.",
  },
  {
    src: gallery4,
    alt: "Minecraft bridge over a river with a mountain in the background",
    note: "Crossed the bridge while a creeper hummed under the mountain.",
  },
  {
    src: gallery5,
    alt: "A cozy house with a red roof in a Minecraft village",
    note: "Red‑roof house smells like bread and suspicious ambition.",
  },
  {
    src: gallery6,
    alt: "A windmill in a Minecraft village",
    note: "Windmill still spins even though Loe swears he never built it.",
  },
];

const RightImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    number: string;
    note: string;
  } | null>(null);

  // Convert galleryImages to include number strings like '01', '02', ...
  const images = galleryImages.map((g, idx) => ({
    src: g.src,
    number: String(idx + 1).padStart(2, "0"),
    note: g.note,
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
        note={selectedImage?.note ?? ""}
      />
    </div>
  );
};

export default RightImageGallery;
