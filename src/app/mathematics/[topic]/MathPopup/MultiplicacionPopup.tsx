import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type MultiplicacionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const MultiplicacionPopup: React.FC<MultiplicacionPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">Multiplicación</h2>
        <p className="mb-4">
          El algoritmo de esta operación en fracciones, es bastante sencillo ya que únicamente consiste en multiplicar los numeradores entre sí y los denominadores entre sí y después, si es posible simplificar el resultado.
        </p>
        <p className="mb-4">Ejemplo:</p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/3_5.gif" // Placeholder for the first multiplication example image
            alt="Ejemplo de multiplicación de fracciones 1"
            width={150}
            height={60}
          />
        </div>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2_9.gif" // Placeholder for the second multiplication example image
            alt="Ejemplo de multiplicación de fracciones 2"
            width={130}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiplicacionPopup;
