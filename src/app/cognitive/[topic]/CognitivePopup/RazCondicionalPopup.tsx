import React from "react";
import Image from "next/image";

type RazCondicionalPopupProps = {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
};

const RazCondicionalPopup: React.FC<RazCondicionalPopupProps> = ({
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
            <h2 className="text-xl font-bold mb-4">Respuesta del ejemplo</h2>
            <p className=" mb-4">
              La respuesta correcta es el inciso{" "}
              <span className="font-bold">d{")"}</span> Todos los niños son
              creativos; porque:
            </p>
            <p className=" mb-4">
              Un diagrama de Venn permite visualizar más concretamente los
              enunciados de las premisas. Así quedaría:
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/razon_p_ejd.gif"
                alt="Cilindro"
                width={300}
                height={200}
              />
            </div>
            <p className=" mb-4">
              <span className="font-bold">a{")"}</span> Todos los niños son
              jugadores. Incorrecto. Esta no puede ser la conclusión porque
              sustituye el conjunto "personas que inventan juegos" por el de
              "personas jugadoras". El diagrama quedaría de esta forma.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/razon_p_eja.gif"
                alt="Cilindro"
                width={300}
                height={200}
              />
            </div>
            <p className=" mb-4">
              <span className="font-bold">b{")"}</span> Algunos niños son
              creativos. Incorrecto. Esta no puede ser la conclusión porque no
              considera la primera premisa y altera la segunda. El diagrama
              quedaría así.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/razon_p_ejb.gif"
                alt="Cilindro"
                width={300}
                height={200}
              />
            </div>
            <p className=" mb-4">
              <span className="font-bold">c{")"}</span> Ningún niño es creativo.
              Incorrecto. Esta no puede ser la conclusión porque no toma en cuenta
              ninguna de las dos premisas. El diagrama quedaría así.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/razon_p_ejc.gif" 
                alt="Cilindro"
                width={300}
                height={200}
              />
            </div>
            <p className=" mb-4">
              <span className="font-bold">d{")"}</span> Todos los niños son
              creativos. Correcto. Esta conclusión combina correctamente a las dos
              premisas.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/examples/razon_p_ejd.gif" 
                alt="Cilindro"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazCondicionalPopup;
