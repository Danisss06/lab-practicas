"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import analogia from "./analogia.json";
import Link from "next/link";
import CustomPopUp from "../../components/CustomPopUp";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const AnalogiaPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer, description } = analogia;

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
        La analogía expresa una relación de semejanza entre seres o cosas
        diferentes. Generalmente, aunque hay excepciones, una analogía es
        bidireccional, es decir, la relación ocurre tanto de izquierda a derecha
        como de derecha a izquierda.
      </p>
      <p className="mt-4">
        Para encontrar la respuesta que completa una analogía se busca que se
        cumplan tres clases de relación:
      </p>
      <ol className="px-8 list-decimal list-inside mt-4">
        <li>Relación de contenido</li>
        <li>Relación de orden</li>
        <li>Relación de forma gramatical</li>
      </ol>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> en el siguiente
        ejemplo se presenta una relación entre los términos{" "}
        <span className="font-bold">Gato</span> y{" "}
        <span className="font-bold">felino</span>. Después se presenta un
        término que se encuentra <span className="underline">subrayado</span>. Selecciona la opción que se
        relaciona con el término subrayado de la misma forma en que se
        relacionan los dos primeros términos.
      </p>
      <p className="text-base mt-4">
        1. Gato es a felino como <span className="underline">cero</span> es a:
      </p>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center items-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className={`bg-[var(--quiz-options-btn-bg)] text-[var(--quiz-options-btn-text)] p-4 rounded-2xl mt-4 transition-all hover:scale-105`}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-6">
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
        description={description}
        isDarkMode={isDarkMode}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default AnalogiaPage;
