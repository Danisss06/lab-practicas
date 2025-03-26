"use client";

import { usePathname } from "next/navigation";
import probabilidad1 from "./probabilidad1.json";
import InfoPopupProbabilidad1 from './InfoMathPopup/Probabilidad1Popup';
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const Probabilidad1Page: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions } = probabilidad1;

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
        La <span className="font-bold">probabilidad de un evento</span>, es la
        razón del número de modos en que puede ocurrir el evento al número de
        resultados posibles.
      </p>
      <p className="mt-4">
        Un <span className="font-bold">evento</span> es un resultado específico
        de un experimento dado.
      </p>
      <p className="mt-4">
        Los <span className="font-bold">valores</span> de la{" "}
        <span className="font-bold">probabilidad</span> para un evento
        cualquiera van desde cero hasta uno.
      </p>
      <ul className="list-disc space-y-2 ml-8 mt-2">
        <li>
          Si la <span className="font-bold">probabilidad</span> de un evento
          tiene <span className="font-bold">valor de cero</span>, significa que
          tal
          <span className="font-bold">evento es imposible</span>.
        </li>
        <li>
          Si la <span className="font-bold">probabilidad</span> de un evento
          tiene el <span className="font-bold">valor de uno</span>, significa
          que es seguro que{" "}
          <span className="font-bold">el evento ocurrirá</span>.
        </li>
        <li>
          Mientras <span className="font-bold">más próxima a uno</span> este la
          probabilidad de un evento, hay{" "}
          <span className="font-bold">más posibilidades</span> de que{" "}
          <span className="font-bold">ocurra tal evento</span>.
        </li>
      </ul>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> calcular la
        probabilidad del evento.
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
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
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopupProbabilidad1 isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default Probabilidad1Page;
