import React from "react";
import Image from "next/image";

type AreasPlanasPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const AreasPlanasPopup: React.FC<AreasPlanasPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="relative h-[500px] overflow-hidden pt-6">
          <button
            onClick={onClose}
            className="absolute top-0 right-[-4px] hover:opacity-80 z-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>

          <div className="h-full overflow-y-auto pr-3 pb-5">
            <h2 className="text-xl font-bold mb-4">Cálculo del área del rectángulo</h2>
            <p className="mb-4">
              La respuesta que tiene el área del rectángulo de base igual a 13 cm y perímetro igual a 42 cm es el <span className="font-bold">inciso b) 104 cm²</span>.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/rectang_ej.gif" // Replace with the actual path where you saved the uploaded image
                alt="Diagrama del Rectángulo"
                width={200}
                height={150}
              />
            </div>
            <p className="mb-4">
              Perímetro = 2b + 2a = 42 cm
            </p>
            <p className="mb-4">
              Se sustituyen los valores de la base y perímetro que se tiene:
            </p>
            <p className="mb-4">
              2 (13) + 2a = 42<br />
              26 + 2a = 42<br />
              2a = 42 - 26<br />
              2a = 16<br />
              a = 16 / 2<br />
              <span className="font-bold">a = 8 cm</span>
            </p>
            <p className="mb-4">
              Dado que el área = (b)(a), se sustituye los valores de la base y la altura en la fórmula:
            </p>
            <p className="font-bold">
              A = (13)(8) = 104 cm²
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasPlanasPopup;