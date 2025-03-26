import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type PrismaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const PrismaPopup: React.FC<PrismaPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Prisma Rectangular</h2>
        <p className="mb-4">
          La fórmula para calcular el volumen de un prisma rectangular es:
        </p>
        <p className="mb-4">
          <strong>V = ( largo ) ( ancho ) ( alto ) = ( Área de la base ) ( altura )</strong>
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/vol_1.gif"
            alt="Prisma Rectangular"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default PrismaPopup;
