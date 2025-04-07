"use client";

import { usePathname } from "next/navigation";
import volumenes from "./volumenes.json";
import CustomPopUp from "../../components/CustomPopUp";
import InfoPopupPrisma from "./MathPopup/PrismaRectangularPopup";
import InfoPopupCubo from "./MathPopup/CuboPopup";
import InfoPopupCilindro from "./MathPopup/CilindroPopup";
import InfoPopupCono from "./MathPopup/ConoPopup";
import InfoPopupEsfera from "./MathPopup/EsferaPopup";
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const VolumenesPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL, description } =
    volumenes;

  const backgroundColor = pathname.includes("cognitive")
    ? "bg-[#bde2b9]"
    : pathname.includes("verbal")
    ? "bg-[#ff7e82]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-gray-500";

  const backgroundColor2 = pathname.includes("cognitive")
    ? "bg-[#addbad]"
    : pathname.includes("verbal")
    ? "bg-[#ff585d]"
    : pathname.includes("math")
    ? "bg-[#afdceb]"
    : "bg-[#c0c0c0]";

  const renderImage = (image: string) => {
    if (!image) {
      return null;
    }

    return (
      <img
        src={image}
        alt="example"
        className="w-72 h-full object-cover mt-4 justify-self-center"
      />
    );
  };

  // State to control popup visibility
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Toggle the popup visibility
  const handleSeeAnswer = () => {
    setPopupOpen(true);
  };

  // Close the popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // States for each popup visibility
  const [isPopupPrismaOpen, setPopupPrismaOpen] = useState(false);
  const [isPopupCuboOpen, setPopupCuboOpen] = useState(false);
  const [isPopupCilindroOpen, setPopupCilindroOpen] = useState(false);
  const [isPopupConoOpen, setPopupConoOpen] = useState(false);
  const [isPopupEsferaOpen, setPopupEsferaOpen] = useState(false);

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        En este tema revisaremos como se calcula los volúmenes de las siguientes
        figuras:
      </p>
      <div className="p-4 flex flex-col items-start">
        <button
          className="underline mb-2"
          onClick={() => setPopupPrismaOpen(true)}
        >
          Prisma Rectangular
        </button>
        <button
          className="underline mb-2"
          onClick={() => setPopupCuboOpen(true)}
        >
          Cubo
        </button>
        <button
          className="underline mb-2"
          onClick={() => setPopupCilindroOpen(true)}
        >
          Cilindro
        </button>
        <button
          className="underline mb-2"
          onClick={() => setPopupConoOpen(true)}
        >
          Cono
        </button>
        <button
          className="underline mb-2"
          onClick={() => setPopupEsferaOpen(true)}
        >
          Esfera
        </button>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> calcular el volumen de
        la figura que se indica.
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
      {renderImage(imageURL[0])}
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className={`bg-[var(--quiz-options-btn-bg)] text-[var(--quiz-options-btn-text)] p-4 rounded-2xl mt-4 transition-all hover:scale-105`}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-6">
        <button
          className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          onClick={handleSeeAnswer}
        >
          Ver Respuesta
        </button>
        <Link href={`${pathname}/quiz${lastPath}`}>
          <button
            className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
  ${backgroundColor2}
  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          >
            Tomar Ejercicio
          </button>
        </Link>
      </div>
      <p className={`mt-4 text-[var(--text-color)]`}>
        Nota: Podrás retomar el ejercicio cuantas veces lo desees.
      </p>

      {/* Popup component */}
      <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        description={description}
        isDarkMode={isDarkMode}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />

      {/* Info Popup */}
      <InfoPopupPrisma
        isOpen={isPopupPrismaOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupPrismaOpen(false)}
      />
      <InfoPopupCubo
        isOpen={isPopupCuboOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupCuboOpen(false)}
      />
      <InfoPopupCilindro
        isOpen={isPopupCilindroOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupCilindroOpen(false)}
      />
      <InfoPopupCono
        isOpen={isPopupConoOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupConoOpen(false)}
      />
      <InfoPopupEsfera
        isOpen={isPopupEsferaOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupEsferaOpen(false)}
      />
    </>
  );
};

export default VolumenesPage;
