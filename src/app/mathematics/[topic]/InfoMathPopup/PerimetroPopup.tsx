import React from "react";
import Image from "next/image";

type PerimetroPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const PerimetroPopup: React.FC<PerimetroPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
          <h2 className="mt-9 text-xl font-bold mb-4">
            Cálculo del perímetro de la figura
          </h2>
          <p className="mb-4">
            La medida del perímetro de la figura es el{" "}
            <span className="font-bold">inciso b{")"} 54 cm²</span>.
          </p>
          <p className="mb-4">
            Para encontrar la solución de este problema es necesario identificar
            los segmentos que delimitan la figura:
          </p>
          <p className="mb-4">
            El que mide 12 cm + el que mide 15 cm + el segmento{" "}
            <span className="font-bold">ED</span> + el segmento{" "}
            <span className="font-bold">DC</span> + el segmento{" "}
            <span className="font-bold">CB</span> + el segmento{" "}
            <span className="font-bold">BA</span>.
          </p>
          <p className="mb-4">
            Al analizar detalladamente, se tiene que:
          </p>
          <p className="mb-4">
            <span className="font-bold">BA</span> +{" "}
            <span className="font-bold">DC</span> = 15 cm y{" "}
            <span className="font-bold">ED</span> +{" "}
            <span className="font-bold">CB</span> = 12 cm
          </p>
          <p className="mb-4">
            Por lo tanto, se llega a lo siguiente:
          </p>
          <p className="font-bold">
            Perímetro = 12 cm + 15 cm + 12 cm + 15 cm = 54 cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerimetroPopup;
