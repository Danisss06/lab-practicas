import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type PerigonalPerigonoPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const PerigonalPerigonoPopup: React.FC<PerigonalPerigonoPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Ángulo</h2>
          <p className="mb-4">
            La medida del ángulo 9x se define de la siguiente manera:
          </p>
          <p className="mb-4">
            Se tiene que: x + 2x + 3x + 4x + 5x + 9x = 360°
          </p>
          <p className="mb-4">
            24x = 360°
          </p>
          <p className="mb-4">
            x = 360°/24
          </p>
          <p className="mb-4 font-bold">
            x = 15°
          </p>
          <p className="mb-4">
            Una vez que se tiene el valor de x, se sustituye en 9x. Por lo que, el ángulo 9x es igual a 9(15°) = <strong>135°</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerigonalPerigonoPopup;
