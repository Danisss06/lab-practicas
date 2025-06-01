import React from "react";
import Image from "next/image";

type TeoremasPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const TeoremasPopup: React.FC<TeoremasPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
              Teoremas sobre Congruencia de Triángulos
            </h2>
            <p className="mb-4">
              <span className="font-bold">LAL</span>. Dos triángulos son
              congruentes si tienen respectivamente{" "}
              <span className="font-bold">
                iguales dos de sus lados (L), y el ángulo (A) comprendidos entre
                ellos.
              </span>
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/angulos_1.gif"
                alt="Teoremas sobre congruencia de triángulos"
                width={300}
                height={400}
              />
            </div>
            <p className="mb-4">
              <span className="font-bold">ALA</span>. Dos triángulos son
              congruentes si tienen respectivamente{" "}
              <span className="font-bold">
                iguales dos ángulos y el lado adyacente a ellos.
              </span>
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/angulos_2.gif"
                alt="Teoremas sobre congruencia de triángulos"
                width={300}
                height={400}
              />
            </div>
            <p className="mb-4">
              <span className="font-bold">LLL</span>. Dos triángulos son
              congruentes si tienen respectivamente{" "}
              <span className="font-bold">iguales sus tres lados.</span>
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/angulos_3.gif"
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

export default TeoremasPopup;
