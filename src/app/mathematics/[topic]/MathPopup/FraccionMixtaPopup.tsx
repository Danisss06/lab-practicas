import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type FraccionMixtaPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const FraccionMixtaPopup: React.FC<FraccionMixtaPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3`}>
        <div className="relative h-[500px] overflow-hidden pt-6">
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-0 right-[-4px] hover:opacity-80 z-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>

          {/* Contenedor con scroll y margen derecho reducido */}
          <div className="h-full overflow-y-auto pr-3 pb-5">
        <h2 className="text-xl font-bold mb-4">Fracción Mixta</h2>
        <div className="overflow-y-auto pr-2">
          <p className="mb-4">
            Es aquella que consta de{" "}
            <span className="font-bold">
              una parte entera y otra parte fraccionaria
            </span>
            , cuando una fracción mixta se reduce a fracción común, se obtiene
            una fracción impropia. La característica es que el
            <span className="font-bold">
              {" "}
              numerador siempre es mayor que el denominador
            </span>
            , por lo que si es positiva, representa a números que son mayores
            que uno, ejemplos:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_2_5.gif" // Placeholder for examples image
              alt="Ejemplos de fracción mixta"
              width={120}
              height={40}
            />
          </div>
          <p className="mb-4">
            Una fracción mixta puede convertirse a fracción impropia mediante el
            siguiente algoritmo:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/denom_denom.gif"
              alt="Fórmula para convertir fracción mixta a fracción impropia"
              width={250}
              height={40}
            />
          </div>
          <p className="mb-4">Ejemplo:</p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_2_5_mini.gif" // Placeholder for example image
              alt="Ejemplo de fracción mixta"
              width={25}
              height={30}
            />
          </div>
          <p className="mb-4">
            Denominador = 5 <br />
            Entero = 3 <br />
            Numerador = 2
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/3_2_5_long.gif" // Placeholder for conversion example image
              alt="Ejemplo de conversión de fracción mixta a fracción impropia"
              width={200}
              height={40}
            />
          </div>
          <p className="mb-4">
            Fracción impropia porque{" "}
            <span className="font-bold">17 {">"} 5</span>
          </p>
          <p className="mb-4 flex flex-row">
            Convertir la fracción impropia {" "}
            <Image
              src="/images/227_51.gif" // Placeholder for improper fraction image
              alt="Fracción impropia"
              width={30}
              height={20}
              className="mx-1"
            />{" "}
            a fracción mixta:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/denom_51.gif" // Placeholder for back conversion example image
              alt="Ejemplo de conversión de fracción impropia a fracción mixta"
              width={280}
              height={40}
            />
          </div>
          <p className="mb-4">La fracción mixta es:</p>
          <div className="flex justify-center">
            <Image
              src="/images/4_23.gif" // Placeholder for final mixed fraction image
              alt="Resultado de fracción mixta"
              width={30}
              height={30}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FraccionMixtaPopup;
