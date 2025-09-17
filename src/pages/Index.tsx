import LeftTextSection from "@/components/LeftTextSection";
import CenterContentSection from "@/components/CenterContentSection";
import RightImageGallery from "@/components/RightImageGallery";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-background flex items-center justify-center box-border p-[5%]">
      <div className="w-full h-full flex">
        {/* Left Section - Vertical Text */}
        <div className="w-1/4 h-full">
          <LeftTextSection />
        </div>
        {/* Center Section - Main Content */}
        <div className="w-1/2 h-full">
          <CenterContentSection />
        </div>
        {/* Right Section - Image Gallery */}
        <div className="w-1/4 h-full">
          <RightImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Index;
