const CenterContentSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-background p-8">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-lg font-light tracking-[0.3em] text-gallery-text uppercase">
            [PRESENTACIÓ]
          </h1>
          <h2 className="text-base font-light tracking-[0.2em] text-gallery-text">
            ARXIU DE NOMAD COFFEE
          </h2>
        </div>
        
        <div className="space-y-4 pt-8">
          <div className="space-y-1">
            <p className="text-sm font-light tracking-[0.1em] text-gallery-text">
              27.11.2024
            </p>
            <p className="text-sm font-light tracking-[0.1em] text-gallery-text">
              18.00-21.00H
            </p>
          </div>
          
          <div className="pt-6">
            <p className="text-sm font-light tracking-[0.15em] text-gallery-text">
              FRUTAS SELECTAS
            </p>
            <p className="text-sm font-light tracking-[0.15em] text-gallery-text">
              [PUJADES 95]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterContentSection;