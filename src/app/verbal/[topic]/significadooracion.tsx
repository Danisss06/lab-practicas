"use client";

import { usePathname } from "next/navigation";
import significadoOracion from "./significadooracion.json";
import { useState } from "react";
import InfoPopupSignificadoOracion from "./VerbalPopups/SignificadoOracionPopup";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const SignificadoOracionPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions } = significadoOracion;

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
        Con la voz y las articulaciones componemos una cadena de sonidos que nos
        sirven para comunicarnos con las demás personas. A estas cadenas las
        llamamos <span className="font-bold">oraciones</span>. Cada{" "}
        <span className="font-bold">oración</span> está constituida por una
        serie de eslabones que pueden intercambiarse, desmontarse y combinarse
        de otra manera entre sí o con otros eslabones para formar una cadena
        nueva.
      </p>
      <p className="mt-4">
        Estos eslabones tienen en general, una forma, un significado y una
        función determinados, por lo que debe tenerse mucho cuidado de no perder
        el significado de un mensaje al hacer el intercambio de los eslabones
        que lo constituyen.
      </p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> en los siguientes
        ejercicios se te pide que encuentres el inciso que tiene el mismo
        mensaje que se te da como muestra.
      </p>
      <p className="text-base mt-4 pl-8">
        {exampleQuestion}
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
          Ver respuesta
        </button>
        <Link href={`${pathname}/quiz${lastPath}`}>
          <button
            className={`w-40 min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          >
            Tomar ejercicio
          </button>
        </Link>
      </div>
      <br />
      <p className={`mt-4 text-[var(--text-color)]`}>
        <strong>Nota:</strong> Podrás retomar el ejercicio cuantas veces lo desees.
      </p>

      {/* Popup component */}
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopupSignificadoOracion
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default SignificadoOracionPage;
