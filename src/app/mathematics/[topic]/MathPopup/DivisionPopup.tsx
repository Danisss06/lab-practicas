import React from "react";
import Image from "next/image";
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type DivisionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const DivisionPopup: React.FC<DivisionPopupProps> = ({
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
        <h2 className="mt-9 text-xl font-bold mb-4">División</h2>
        <div className="max-h-96 overflow-y-auto pr-2">
          <p className="mb-4">
            También resulta sencillo de acuerdo con el siguiente procedimiento.
          </p>
          <p className="mb-4">Ejemplo:</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_5_4_7.gif" // Placeholder for the first division example image
              alt="Ejemplo de división de fracciones 1"
              width={80}
              height={40}
            />
          </div>
          <p className="mb-4">Se efectúa al mismo tiempo los pasos:</p>
          <p className="mb-2">1. Se invierte el divisor (su recíproco)</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/4_7_7_4.gif" // Placeholder for the reciprocal step image
              alt="Paso de invertir el divisor"
              width={140}
              height={40}
            />
          </div>
          <p className="mb-2">2. Se cambia la división por multiplicación</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_5_7_4.gif" // Placeholder for changing division to multiplication image
              alt="Cambio de división a multiplicación"
              width={80}
              height={40}
            />
          </div>
          <p className="mb-2">3. Se desarrolla la multiplicación</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_5_21_20.gif" // Placeholder for multiplication step image
              alt="Paso de desarrollar la multiplicación"
              width={150}
              height={40}
            />
          </div>
          <p className="mb-4">
            Pero <span className="font-bold">21/20</span>, es <span className="font-bold">fracción impropia</span> porque 21 {'>'} 20 por lo que puede convertirse en fracción mixta haciendo la división.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/denom_20.gif" // Placeholder for mixed fraction conversion image
              alt="Conversión a fracción mixta"
              width={300}
              height={40}
            />
          </div>
          <p className="mb-4">La fracción que queda es:</p>
          <div className="flex justify-center">
            <Image
              src="/images/1_1_20.gif" // Placeholder for final mixed fraction image
              alt="Resultado de fracción mixta"
              width={30}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionPopup;
