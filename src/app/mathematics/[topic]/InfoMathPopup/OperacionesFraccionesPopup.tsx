import React from "react";
import Image from "next/image";

type OperacionesFraccionesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const OperacionesFraccionesPopup: React.FC<OperacionesFraccionesPopupProps> = ({
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
            <h2 className="text-xl font-bold mb-4">
              Simplificación de fracción
            </h2>
            <p className="mb-4">
              El resultado simplificado de &nbsp;
              <Image
                src="/images/examples/7_8.gif"
                alt="7/8"
                width={60}
                height={30}
              />
            </p>
            <p className="mb-4">
              1. Se eleva al cuadrado el numerador y el denominador &nbsp;
              <Image
                src="/images/examples/4_7.gif"
                alt="16/49"
                width={65}
                height={30}
              />
            </p>
            <p className="mb-4">
              2. Entonces &nbsp;
              <Image
                src="/images/examples/7_8_por.gif"
                alt="7/8"
                width={55}
                height={30}
              />
            </p>
            <p className="mb-4">
              3. Se saca séptima (se divide por 7)
              <Image
                src="/images/examples/7_8_eli.gif"
                alt="7/8"
                width={110}
                height={30}
              />
            </p>
            <p className="mb-4">
              4. Se saca octava (se divide por 8)
              <Image
                src="/images/examples/1_8_eli.gif"
                alt="7/8"
                width={110}
                height={30}
              />
            </p>
            <p className="mb-4">
              5. Se multiplica numerador por numerador y denominador por
              denominador. Y entonces el resultado sería igual a:
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/2_7.gif"
                alt="2/7"
                width={10}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperacionesFraccionesPopup;
