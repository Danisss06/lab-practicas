import React from "react";
import Image from "next/image";

type TrianguloAnguloPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const TrianguloAnguloPopup: React.FC<TrianguloAnguloPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Ángulo en el Triángulo</h2>
          <p className="mb-4">
            La respuesta es el <span className="font-bold">inciso c) 65°</span>.
          </p>
          <p className="mb-4">
            Se calcula de la siguiente manera:
          </p>
          <p className="mb-4">
            1. Considerar el teorema de que la suma de los tres ángulos de cualquier triángulo es igual a 180°.
          </p>
          <p className="mb-4">
            2. Entonces:<br />
            &nbsp;&nbsp;&nbsp;x + 25° + 90° = 180°<br />
            &nbsp;&nbsp;&nbsp;x = 180° - 25° - 90°<br />
            &nbsp;&nbsp;&nbsp;x = <span className="font-bold">65°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrianguloAnguloPopup;
