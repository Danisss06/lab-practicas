import React from "react";
import Image from "next/image";

type MultiplicacionPotenciacionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const MultiplicacionPotenciacionPopup: React.FC<
  MultiplicacionPotenciacionPopupProps
> = ({ isOpen, isDarkMode, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <button onClick={onClose} className="float-right hover:opacity-80">
          <div
            className="w-6 h-6 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "var(--close-icon)" }}
          ></div>
        </button>
        <h2 className="mt-9 text-xl font-bold mb-4 ">
          Multiplicación y potenciación
        </h2>
        <p className="mb-4">
          La jerarquía u orden de las operaciones indica que la potenciación
          tiene <span className="font-bold">prioridad</span> sobre la
          multiplicación y división.
        </p>
        <p className="mb-4">
          Un ejemplo de esta jerarquía sería el siguiente:
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2_3_3_5.gif" // Placeholder for the first example image
            alt="Ejemplo de potenciación y multiplicación 1"
            width={80}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiplicacionPotenciacionPopup;
