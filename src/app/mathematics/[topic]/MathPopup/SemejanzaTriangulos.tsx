import React from "react";
import Image from "next/image";

type SemejanzaTriangulosProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const SemejanzaTriangulos: React.FC<SemejanzaTriangulosProps> = ({
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
            Teoremas sobre semejanza de triángulos
          </h2>
          <p className="mb-4">
            Dos triángulos son semejantes si tienen respectivamente{" "}
            <span className="font-bold">iguales sus tres ángulos.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_4.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
          <p className="mb-4">
            Dos triángulos son semejantes si tienen respectivamente{" "}
            <span className="font-bold">iguales, un ángulo agudo.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_5.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
          <p className="mb-4">
            Dos triángulos son semejantes si sus{" "}
            <span className="font-bold">lados son proporcionales.</span>
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/angulos_6.gif"
              alt="Teoremas sobre congruencia de triángulos"
              width={300}
              height={400}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemejanzaTriangulos;
