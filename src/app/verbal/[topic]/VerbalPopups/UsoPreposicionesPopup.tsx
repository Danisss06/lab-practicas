import React from "react";

type UsoPreposicionesPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const UsoPreposicionesPopup: React.FC<UsoPreposicionesPopupProps> = ({
  isOpen,
  isDarkMode,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[var(--popup-bg)] text-[var(--popup-text)] p-6 rounded-2xl shadow-md max-w-md w-full mx-3">
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

          {/* Contenido con scroll */}
          <div className="h-full overflow-y-auto pr-3 pb-5">
            <h2 className="text-xl font-bold mb-4">Respuesta de ejemplo</h2>
            <p className="mb-4">
              La respuesta es el inciso <span className="font-bold">d)</span> porque:
            </p>
            <p className="mb-4">
              <span className="font-bold">a)</span> La televisión absorbe a la gente.
              <br />
              <span className="text-green-600 font-bold">Correctamente empleada</span> porque "gente" es el complemento directo relativo a personas.
            </p>
            <p className="mb-4">
              <span className="font-bold">b)</span> Raúl envió a Lorena un ramo de rosas.
              <br />
              <span className="text-green-600 font-bold">Correctamente empleada</span> porque Lorena es una persona.
            </p>
            <p className="mb-4">
              <span className="font-bold">c)</span> Mireya se sentó a la mesa, a pesar de no tener hambre.
              <br />
              <span className="text-green-600 font-bold">Correctamente empleada</span> porque determina el lugar en donde va a sentarse.
            </p>
            <p className="mb-4">
              <span className="font-bold">d)</span> El examen a presentar, es el de español.
              <br />
              <span className="text-red-600 font-bold">Incorrectamente empleada</span> porque hay solecismo en el uso de "a" para introducir una subordinada que debe introducirse con "que". Lo correcto sería: "... que se va a presentar...".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsoPreposicionesPopup;