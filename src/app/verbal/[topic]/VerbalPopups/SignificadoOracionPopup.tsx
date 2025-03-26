import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type SignificadoOracionPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const SignificadoOracionPopup: React.FC<SignificadoOracionPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta de Ejemplo</h2>
          <p className="mb-4">
            La respuesta es el inciso <span className="font-bold">a{')'}</span> porque:
          </p>
          <p className="mb-4">
            <span className="font-bold">a{')'}</span> Que Rogelio siempre había querido a Ale, ambos lo sabían.
            <br />
            <span className="text-green-600 font-bold">Correcto</span><br />
            Conserva el sentido completo de la oración enunciada. Sólo se intercambia la posición del objeto directo y el sujeto.
          </p>
          <p className="mb-4">
            <span className="font-bold">b{')'}</span> Ambos querían a Rogelio y a Ale.
            <br />
            <span className="text-red-600 font-bold">Incorrecto</span><br />
            Traslada el verbo querer a quienes sabían (ellos) y cambia completamente el sentido de la oración.
          </p>
          <p className="mb-4">
            <span className="font-bold">c{')'}</span> Ale siempre había querido a Rogelio, ambos lo sabían.
            <br />
            <span className="text-red-600 font-bold">Incorrecto</span><br />
            Cambia el sujeto de la oración subordinada, cambiando el sentido de ésta, pues en la original, no dice que Ale quería a Rogelio.
          </p>
          <p className="mb-4">
            <span className="font-bold">d{')'}</span> Sabían ambos que Ale quería a Rogelio.
            <br />
            <span className="text-red-600 font-bold">Incorrecto</span><br />
            Cambia el sentido de la oración porque, aquélla no expresa que Ale quería a Rogelio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignificadoOracionPopup;
