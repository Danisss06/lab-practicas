import React from "react";
import Image from "next/image";

type AreasComparacionesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const AreasComparacionesPopup: React.FC<AreasComparacionesPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Cálculo del Área del Triángulo</h2>
          <p className="mb-4">
            La respuesta al problema es <span className="font-bold">inciso c) 75 cm²</span>.
          </p>
          <p className="mb-4">
            El área del triángulo CBE se determina de la siguiente manera:
          </p>
          <p className="mb-4 flex flex-row">
            Área de un triángulo = 
            <Image
              src="/images/examples/ba_2.gif"
              alt="base por altura entre dos"
              width={120}
              height={50}
            />
          </p>
          <p className="mb-4 flex flex-row">
            Área = 
            <Image
              src="/images/examples/ba_2_cn.gif"
              alt="base por altura entre dos"
              width={160}
              height={50}
            />
            = 75 cm²
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreasComparacionesPopup;
