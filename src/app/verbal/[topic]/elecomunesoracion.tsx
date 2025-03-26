"use client";

import { usePathname } from "next/navigation";
import eleComunesOracion from "./elecomunesoracion.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const EleComunesOracionPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const {
    topic,
    exampleQuestion,
    exampleOptions,
    answer
  } = eleComunesOracion;

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
        Los elementos comunes de la oración son el sujeto y el predicado.
      </p>
      <p className="mt-4">
        <span className="text-green-600">Sujeto:</span> es la persona u objeto que ejecuta la acción descrita o anunciada por el verbo. Responde a la pregunta <span className="font-bold">¿quién es?, ¿quién está haciendo la acción o el estado que expresa el verbo?</span>
      </p>
      <p className="mt-4">
        <span className="text-green-600">Verbo:</span> es la acción que ejecuta, ejecutó o ejecutará el sujeto, o el estado en que se encuentra éste.
      </p>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identifica el sujeto o predicado de la oración, según se indique.
      </p>
      <p className="text-base mt-4 pl-8">
        {exampleQuestion}
      </p>
      <p className="text-base mt-4 pl-8">
      &quot;Rodeado de brezos y cenizos, se yergue la humilde amapola&quot;.
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
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-6">
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
            Tomar Quiz
          </button>
        </Link>
      </div>
      <p className={`mt-4 text-[var(--text-color)]`}>
        Nota: Podrás retomar el quiz cuantas veces lo desees.
      </p>

      {/* Popup component */}
      <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default EleComunesOracionPage;
