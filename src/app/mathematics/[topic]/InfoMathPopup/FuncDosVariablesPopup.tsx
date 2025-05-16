import React from "react";
import Image from "next/image";


type FuncDosVariablesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FuncDosVariablesPopup: React.FC<FuncDosVariablesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Resolución para el valor de "y"</h2>
          <p className="mb-4">
            La respuesta que contiene el valor de "y" de la ecuación <strong>2x + 3y = 12</strong>; donde, <strong>x = 3</strong> se determina de la siguiente manera:
          </p>
          <p className="mb-4">
            1. Sustituye el valor de x en la ecuación<br />
            &nbsp;&nbsp;&nbsp;&nbsp;2 ( 3 ) + 3y = 12
          </p>
          <p className="mb-4">
            2. Efectuar la operación matemática<br />
            &nbsp;&nbsp;&nbsp;&nbsp;6 + 3y = 12
          </p>
          <p className="mb-4">
            3. Aplicar las propiedades de igualdad
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/ej_ev_ecua.gif" // Replace with the actual path where you saved the uploaded image
              alt="Resolución de la Ecuación para el Valor de Y"
              width={400}
              height={200}
            />
          </div>
          <p className="mb-4">
            4. Resultado y = 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuncDosVariablesPopup;
