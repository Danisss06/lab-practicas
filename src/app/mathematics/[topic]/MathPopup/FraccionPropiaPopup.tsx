import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type FraccionPropiaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FraccionPropiaPopup: React.FC<FraccionPropiaPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">Fracción Propia</h2>
        <p className="mb-4">
          Es aquella que no contiene enteros. Su característica es que el
          <span className="font-bold"> numerador siempre es menor que el denominador.</span> Si una fracción propia
          es positiva, representa a un número que está entre el cero y el uno.
        </p>
        <p className="mb-4 font-bold">
          Ejemplo: 
        </p>
        <Image
          src="/images/3_7.gif"
          alt="fraccion propia"
          width={100}
          height={25}
          className="justify-self-center"
        />
      </div>
    </div>
  );
};

export default FraccionPropiaPopup;
