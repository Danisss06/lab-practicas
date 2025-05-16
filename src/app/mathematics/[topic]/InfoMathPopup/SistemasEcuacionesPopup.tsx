import React from "react";
import Image from "next/image";

type SolucionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const SolucionPopup: React.FC<SolucionPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Resolución de la ecuación</h2>
          <p className="mb-4">
            Con el propósito de quitar una de las incógnitas, <strong>se multiplica la ecuación por (-2)</strong> y se suprime la incógnita "x".
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/ej_sist.gif" // Replace with the actual path where you saved the uploaded image
              alt="Resolución del sistema de ecuaciones"
              width={400}
              height={300}
            />
          </div>
          <p className="mb-4">
            La solución es el punto (3, 2).
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolucionPopup;
