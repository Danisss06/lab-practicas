import React from "react";
import Image from "next/image";

type EcuacionesLinealesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const EcuacionesLinealesPopup: React.FC<EcuacionesLinealesPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
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
          <h2 className="mt-9 text-xl font-bold mb-4">
            Resolución de la ecuación
          </h2>
          <p className="mb-4">
            Con el propósito de reunir todos los términos que contienen a la
            variable en un solo lado del igual, se suma el{" "}
            <span className="font-bold">inverso aditivo</span> de cada uno de
            los términos que se desean cambiar de lado. Como se quiere cambiar
            de lado los términos: <span className="font-bold">"x", "+3x"</span>,
            sumamos <span className="font-bold">"-x", "-3x"</span> a ambos
            lados.
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/examples/ej_lineal.gif" // Replace with the actual path where you saved the uploaded image
              alt="Resolución de la Ecuación Paso a Paso"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcuacionesLinealesPopup;
