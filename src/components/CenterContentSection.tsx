import { useState } from "react";

const CenterContentSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ nickname: "", keyNumber: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Netlify
    setIsFormOpen(false);
    setFormData({ nickname: "", keyNumber: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full bg-background p-8 relative">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-lg font-light tracking-[0.3em] text-gallery-text uppercase">
            [PSHENÓ]
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

          <div className="pt-8">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="text-xs font-light tracking-[0.2em] text-gallery-text hover:text-gallery-text-muted transition-colors duration-200 border border-gallery-border px-4 py-2"
            >
              [REGISTRE]
            </button>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-8 animate-drop-up">
          <form
            name="presentation-register"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4 bg-background border-t border-gallery-border pt-6"
          >
            <input
              type="hidden"
              name="form-name"
              value="presentation-register"
            />

            <div className="space-y-3">
              <input
                type="text"
                name="nickname"
                placeholder="NICKNAME"
                value={formData.nickname}
                onChange={(e) =>
                  setFormData({ ...formData, nickname: e.target.value })
                }
                className="w-full bg-transparent border-b border-gallery-border text-sm font-light tracking-[0.1em] text-gallery-text placeholder:text-gallery-text-muted focus:outline-none focus:border-gallery-text pb-2"
                required
              />

              <input
                type="text"
                name="keyNumber"
                placeholder="KEY NUMBER"
                value={formData.keyNumber}
                onChange={(e) =>
                  setFormData({ ...formData, keyNumber: e.target.value })
                }
                className="w-full bg-transparent border-b border-gallery-border text-sm font-light tracking-[0.1em] text-gallery-text placeholder:text-gallery-text-muted focus:outline-none focus:border-gallery-text pb-2"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-xs font-light tracking-[0.2em] text-gallery-text hover:text-gallery-text-muted transition-colors duration-200 border border-gallery-border px-6 py-2"
              >
                [ENVIAR]
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CenterContentSection;
