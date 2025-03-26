import React from "react";
import Image from "next/image";
import xmark from "../../../../../public/icons/xmark.svg";
import xmarkwhite from "../../../../../public/icons/xmarkwhite.svg";

type TransformacionesLogicasPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const TransformacionesLogicasPopup: React.FC<TransformacionesLogicasPopupProps> = ({
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
          <h2 className="mt-9 text-xl font-bold mb-4">Respuesta Correcta</h2>
          <p className=" mb-4">
            La respuesta correcta es el inciso{" "}
            <span className="font-bold">b{")"} Rubén, Eduardo, Lucía, Saúl, Bety</span>; porque:
          </p>
          <h3 className="text-lg font-semibold mt-4">Se define:</h3>
          <p className=" mb-4 pl-4">
            Lucía = L <br />
            Bety = B <br />
            Eduardo = E <br />
            Rubén = R <br />
            Saúl = S
          </p>
          <h3 className="text-lg font-semibold mt-4">Referencia: distancia al gimnasio</h3>
          <p className=" mb-4">
            Se utiliza el signo <span className="font-bold">&gt;</span> para indicar mayor distancia (más lejos) <br />
            Se utiliza el signo <span className="font-bold">&lt;</span> para indicar menor distancia (más cerca)
          </p>
          <p className=" mb-4">
            L &lt; S <br />
            R &lt; S &gt; B <br />
            R &lt; E &lt; L <br />
            R &lt; E &lt; L &lt; S &lt; B <br />
            Este es el orden de menor a mayor distancia casa-gimnasio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransformacionesLogicasPopup;
