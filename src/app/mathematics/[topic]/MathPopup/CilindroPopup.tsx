import React from "react";
import Image from "next/image";

type CilindroPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const CilindroPopup: React.FC<CilindroPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Cilindro</h2>
        <p className="mb-4">
          La fórmula para calcular el volumen de un cilindro es:
        </p>
        <p className="mb-4">
          <strong>V = πr²h</strong>
        </p>
        <p className="mb-4">
          Donde: <br />
          Área de la base = πr² <br />
          Altura = h
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_3.gif" // Replace with the actual path where you saved the uploaded image
            alt="Cilindro"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default CilindroPopup;
