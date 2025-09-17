import LeftTextSection from "@/components/LeftTextSection";
import CenterContentSection from "@/components/CenterContentSection";
import RightImageGallery from "@/components/RightImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Section - Vertical Text */}
      <div className="w-1/4 h-screen">
        <LeftTextSection />
      </div>
      
      {/* Center Section - Main Content */}
      <div className="w-1/2 h-screen">
        <CenterContentSection />
      </div>
      
      {/* Right Section - Image Gallery */}
      <div className="w-1/4 h-screen">
        <RightImageGallery />
      </div>
    </div>
  );
};

export default Index;
