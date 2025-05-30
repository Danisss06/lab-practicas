import React from "react";

type CoordSubPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const CoordSubPopup: React.FC<CoordSubPopupProps> = ({ isOpen, isDarkMode, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
        <div className="relative h-[500px] overflow-hidden pt-6">
          {/* Botón de cerrar superpuesto */}
          <button
            onClick={onClose}
            className="absolute top-0 right-[-4px] hover:opacity-80 z-20"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>

          {/* Contenedor con scroll recortado visualmente */}
          <div className="h-full overflow-y-auto pr-4 pb-5">
            <h2 className="text-xl font-bold mb-4">Respuesta de ejemplo</h2>
            <p className="mb-4">
              La respuesta es el inciso <span className="font-bold">c)</span> porque:
            </p>
            <p className="mb-4">
              <span className="font-bold">a{')'}</span> Sentado cómodamente, Pepe intenta,{" "}
              <span className="underline font-bold">sino</span> dormir, por lo menos descansar.
            </p>
            <p className="mb-4">
              Está <span className="font-bold text-green-800">mal</span> empleada la palabra, porque
              no se refiere a oposición o contrariedad, únicamente indica concesión mediante la
              conjunción <span className="italic">si</span>.
            </p>
            <p className="mb-4">
              <span className="font-bold">b{')'}</span> Pepe, ten cuidado de no golpear la tuerca,
              pues <span className="underline font-bold">sino</span> el tornillo no entrara.
            </p>
            <p className="mb-4">
              Está <span className="font-bold text-green-800">mal</span> empleada la palabra, porque
              no se refiere a oposición o contrariedad, indica concesión mediante la conjunción{" "}
              <span className="italic">si</span>.
            </p>
            <p className="mb-4">
              <span className="font-bold">c{')'}</span> Pepe no está estudiando,{" "}
              <span className="underline font-bold">sino</span> viendo la televisión.
            </p>
            <p className="mb-4">
              Está <span className="font-bold text-green-800">bien</span> empleada la palabra,
              porque se refiere a oposición o contrariedad.
            </p>
            <p className="mb-4">
              <span className="font-bold">d{')'}</span> Pepe no tiene otro medio de influir en ella{" "}
              <span className="underline font-bold">que</span> acudiendo a su madre.
            </p>
            <p className="mb-4">
              Está <span className="font-bold text-green-800">mal</span> empleada la palabra, porque
              es un galicismo el uso de <span className="underline font-bold">que</span> en vez de{" "}
              <span className="underline font-bold">sino</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordSubPopup;

