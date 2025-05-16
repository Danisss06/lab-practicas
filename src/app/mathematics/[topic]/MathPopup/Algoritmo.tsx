import React from 'react';
import Image from 'next/image';


type AlgorithmPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const AlgorithmPopup: React.FC<AlgorithmPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
        <h2 className="mt-9 text-xl font-bold mb-4">Algoritmo</h2>
        <p className="mb-4">Es el método o procedimiento que se utiliza para ejecutar una operación matemática.</p>
      </div>
    </div>
  );
};

export default AlgorithmPopup;
