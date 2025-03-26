import React from 'react';
import Image from 'next/image';
import xmark from '../../../../../public/icons/xmark.svg';
import xmarkwhite from '../../../../../public/icons/xmarkwhite.svg';

type FraccionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FraccionPopup: React.FC<FraccionPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">Fracción</h2>
        <p className="mb-4">Es una expresión matemática que consta de: numerador y denominador separados por una línea horizontal.</p>
        <Image src="/images/n_d.gif" alt="fraccion" width={100} height={30} className="justify-self-center"/>
      </div>
    </div>
  );
};

export default FraccionPopup;
