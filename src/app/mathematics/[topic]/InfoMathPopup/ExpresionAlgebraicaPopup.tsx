import React from "react";
import Image from "next/image";

type ExrpessionAlgebraicaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const ExrpessionAlgebraicaPopup: React.FC<ExrpessionAlgebraicaPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="max-h-[500px] overflow-y-auto pr-2">
          <button onClick={onClose} className="float-right hover:opacity-80">
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta del Ejemplo</h2>
          <p className="mb-4">
            La respuesta correcta es el inciso <span className="font-bold">b) A = x ( 3x )</span>, porque:
          </p>
          <p className="mb-4">
            El dato proporcionado como referencia es la medida de la base:
          </p>
          <p className="mb-4">
            <span className="font-bold">Donde:</span><br />
            Medida de la base = x<br />
            Medida de la altura = 3x
          </p>
          <p className="mb-4">
            <span className="font-bold">Fórmula:</span><br />
            Área del rectángulo = (base) (altura)
          </p>
          <p className="mb-4">
            <span className="font-bold">Entonces:</span><br />
            Área = ( x ) ( 3x ) = x ( 3x )
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExrpessionAlgebraicaPopup;
