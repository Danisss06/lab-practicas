"use client";

import { usePathname } from "next/navigation";
import razonamientocondicional from './razonamientocondicional.json';
import InfoPopupRazCondicional from './CognitivePopup/RazCondicionalPopup';
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const RazonamientoCondicionalPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const {
    topic,
    exampleOptions,
  } = razonamientocondicional;

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

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        El razonamiento condicional es parte importante de la lógica natural que nos permite discurrir con acierto sin recurrir al conocimiento científico.
      </p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> en estos ejercicios se proporcionan una o más premisas (afirmaciones sustentadas empíricamente) que conducen a una conclusión. Debes seleccionar la opción que representa la conclusión del ejemplo:
      </p>
      <p className="text-base mt-4 ml-6">
        1. El inciso que tiene la conclusión de las siguientes premisas es:
        <br />Todos los niños inventan juegos.
        <br />Todos los que inventan juegos son creativos.
        <br />Por lo tanto,
      </p>
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
      <div className="mt-4 flex flex-row justify-center gap-6">
        <button
          className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          onClick={
            handleSeeAnswer
          }
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
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopupRazCondicional
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default RazonamientoCondicionalPage;
