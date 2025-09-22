import LeftTextSection from "@/components/LeftTextSection";
import CenterContentSection from "@/components/CenterContentSection";
import RightImageGallery from "@/components/RightImageGallery";
import { useIsMobile } from "@/hooks/use-mobile";

import { useEffect, useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className="h-screen overflow-hidden bg-background flex items-center justify-center box-border p-[5%] relative">
      <div className="w-full h-full flex">
        <div
          className={
            isMobile
              ? "w-[25%] h-full opacity-20 pointer-events-none transition-all duration-300"
              : "w-1/4 h-full"
          }
        >
          <LeftTextSection />
        </div>
        <div className={isMobile ? "w-[60%] h-full" : "w-1/2 h-full"}>
          <CenterContentSection />
        </div>
        <div
          className={
            isMobile
              ? "w-[30%] h-full opacity-20 pointer-events-none transition-all duration-300"
              : "w-1/4 h-full"
          }
        >
          <RightImageGallery />
        </div>
      </div>
      {isMobile && showPopup && (
        <div
          className="fixed left-1/2 bottom-6 -translate-x-1/2 px-6 py-3 rounded-lg bg-black bg-opacity-50 text-white text-xs font-medium shadow-lg animate-glow z-50"
          style={{ pointerEvents: "none" }}
        >
          We recommend using the PC version of this webpage for the best
          experience.
        </div>
      )}
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 8px 2px #fff; opacity: 0.7; }
          40% { box-shadow: 0 0 32px 12px #fff; opacity: 1; }
          60% { box-shadow: 0 0 32px 12px #fff; opacity: 1; }
          100% { box-shadow: 0 0 8px 2px #fff; opacity: 0.7; }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite, fadeOut 1s ease-in-out 4s forwards;
          transition: opacity 1s;
        }
      `}</style>
    </div>
  );
};

export default Index;
