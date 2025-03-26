import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type ConoPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const ConoPopup: React.FC<ConoPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Cono</h2>
        <p className="mb-4">
          La fórmula para calcular el volumen de un cono es:
        </p>
        <p className="mb-4">
          <strong>V = (1/3)πr²h</strong>
        </p>
        <p className="mb-4">
          Donde: <br />
          Área de la base = πr² <br />
          Altura = h
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_4.gif" // Replace with the actual path where you saved the uploaded image
            alt="Cono"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ConoPopup;
