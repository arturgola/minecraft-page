import { useState } from "react";

const CenterContentSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    keyNumber: "",
    email: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Netlify
    setIsFormOpen(false);
    setFormData({ nickname: "", keyNumber: "", email: "", note: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full bg-background p-8 relative">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-lg font-light tracking-[0.3em] text-gallery-text uppercase">
            [PSHENÓ]
          </h1>
          <h2 className="text-base font-light tracking-[0.2em] text-gallery-text">
            EMPIRE OF FLOATING COWS AND UNFINISHED BRIDGES
          </h2>
        </div>

        <div className="space-y-4 pt-8">
          <div className="space-y-1">
            <p className="text-sm font-light tracking-[0.1em] text-gallery-text">
              23.08.2022
            </p>
            <p className="text-sm font-light tracking-[0.1em] text-gallery-text">
              THAT DAY WE BEGAN COUNTING PUMPKINS AT DAWN
            </p>
          </div>

          <div className="pt-6">
            <p className="text-sm font-light tracking-[0.15em] text-gallery-text">
              CREEPER MARKET
            </p>
            <p
              className="text-sm font-light tracking-[0.15em] text-gallery-text cursor-pointer hover:text-gallery-text-muted transition-colors duration-200"
              onClick={() => navigator.clipboard.writeText("play.psheno.com")}
              title="Click to copy"
            >
              [play.psheno.com]
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="text-xs font-light tracking-[0.2em] text-gallery-text hover:text-gallery-text-muted transition-colors duration-200 border border-gallery-border px-4 py-2"
            >
              [REGISTRATION]
            </button>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="w-full mt-8 animate-drop-up">
          <form
            name="presentation-register"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4 bg-background border-t border-gallery-border pt-6 px-8"
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
                placeholder="UUDI"
                value={formData.keyNumber}
                onChange={(e) =>
                  setFormData({ ...formData, keyNumber: e.target.value })
                }
                className="w-full bg-transparent border-b border-gallery-border text-sm font-light tracking-[0.1em] text-gallery-text placeholder:text-gallery-text-muted focus:outline-none focus:border-gallery-text pb-2"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-gallery-border text-sm font-light tracking-[0.1em] text-gallery-text placeholder:text-gallery-text-muted focus:outline-none focus:border-gallery-text pb-2"
                required
              />

              <textarea
                name="note"
                placeholder="NOTE"
                value={formData.note}
                onChange={(e) =>
                  setFormData({ ...formData, note: e.target.value })
                }
                className="w-full bg-transparent border-b border-gallery-border text-sm font-light tracking-[0.1em] text-gallery-text placeholder:text-gallery-text-muted focus:outline-none focus:border-gallery-text pb-2 resize-none min-h-[40px]"
                rows={2}
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
