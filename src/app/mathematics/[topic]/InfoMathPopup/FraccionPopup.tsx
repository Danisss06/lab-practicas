import React from "react";
import Image from "next/image";

type FraccionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FraccionPopup: React.FC<FraccionPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Procedimiento de División de Fracciones</h2>
          <p className="mb-4">
            La respuesta al ejemplo se determina con el siguiente procedimiento:
          </p>
          <p className="mb-4">
            1. Se convierte la división en multiplicación invirtiendo el divisor (recíproco del divisor).
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_6_por.gif" // Replace with the actual path of the fraction image
              alt="5/6"
              width={100}
              height={30}
            /> 
          </div>
          <p className="mb-4">
            2. Dividir por 2 el numerador y el denominador.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_6_por_eli.gif" // Replace with the actual path of the fraction image
              alt="5/6"
              width={100}
              height={30}
            />
          </div>
          <p className="mb-4">
            3. Multiplicando numerador por numerador y denominador por denominador.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/5_3.gif" // Replace with the actual path of the fraction image
              alt="20/9"
              width={150}
              height={30}
            />
          </div>
          <p className="mb-4">
            Se deja el resultado como fracción impropia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FraccionPopup;
