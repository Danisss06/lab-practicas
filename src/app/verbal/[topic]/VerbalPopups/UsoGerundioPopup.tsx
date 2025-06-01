import React from "react";

type GerundioPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const GerundioPopup: React.FC<GerundioPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <div className="relative h-[500px] overflow-hidden pt-6">
          <button
            onClick={onClose}
            className="absolute top-0 right-[-4px] hover:opacity-80 z-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>

          <div className="h-full overflow-y-auto pr-4 pb-5">
            <h2 className="text-xl font-bold mb-4">Respuesta de ejemplo</h2>
            <p className="mb-4">
              La respuesta es el inciso <span className="font-bold">c)</span> porque:
            </p>
            <p className="mb-4">
              <span className="font-bold">a)</span> <span className="font-bold underline">Andando</span> por las oscuras calles, el peligro lo acechaba en cada esquina.
              <br />
              <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa coexistencia del andar y del acecho.
            </p>
            <p className="mb-4">
              <span className="font-bold">b)</span> En <span className="font-bold underline">llegando</span> tú, me iré yo.
              <br />
              <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa anterioridad inmediata.
            </p>
            <p className="mb-4">
              <span className="font-bold">c)</span> Llegaron a su casa, <span className="font-bold underline">teniendo</span> que regresarse porque estaba cerrada.
              <br />
              <span className="text-red-600 font-bold">Incorrectamente utilizado el gerundio</span> porque el tener que regresarse es posterior a llegar.
            </p>
            <p className="mb-4">
              <span className="font-bold">d)</span> Las damas, <span className="font-bold underline">cubriendo</span> sus cabellos con un tenue velo, entraron rápidamente a la iglesia.
              <br />
              <span className="text-green-600 font-bold">Correctamente utilizado el gerundio</span> porque expresa anterioridad inmediata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerundioPopup;