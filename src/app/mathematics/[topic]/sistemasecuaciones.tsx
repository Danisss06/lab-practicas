"use client";

import { usePathname } from "next/navigation";
import sistemasEcuaciones from "./sistemasecuaciones.json";
import InfoPopupSistemasEcuaciones from './InfoMathPopup/SistemasEcuacionesPopup';
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const SistemasEcuacionesPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions } = sistemasEcuaciones;

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
        Un sistema de ecuaciones es un conjunto de dos o más de ellas, las
        cuales representan lugares geométricos que pueden cumplir con una de
        tres características:
      </p>
      <div className={`grid grid-cols-2 gap-4 p-4 bg-[var(--math-table-bg)] mt-4`}>
        {/* Row 1: Headers */}
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>
          #
        </div>
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>Descripción</div>

        {/* Row 2: Condition 1 */}
        <div className="p-4 text-center bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          1
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            Los lugares geométricos se intersecan (se cortan), en uno o más
            puntos. En este caso se dice que el sistema sí tiene solución y esa
            solución es el o los puntos de intersección de los lugares
            geométricos.
          </p>
        </div>

        {/* Row 3: Condition 2 */}
        <div className="p-4 text-center bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          2
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            Los lugares geométricos no se intersecan (no se cortan). Entonces se
            dice que el sistema no tiene solución y en el caso en que el sistema
            esté formado por líneas rectas, éstas son paralelas.
          </p>
        </div>

        {/* Row 4: Condition 3 */}
        <div className="p-4 text-center bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          3
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            Es un sólo lugar geométrico (una sola gráfica). En este caso se dice
            que el sistema es equivalente o dependiente.
          </p>
        </div>
      </div>
      <p className="mt-4">Las diferentes clases de lugares geométricos son:</p>
      <ul className="list-disc ml-8 mt-4">
        <li>La línea</li>
        <li>Las cónicas (parábola, circunferencia, elipse, hipérbola)</li>
      </ul>
      <p className="mt-4">
        Tipos de soluciones y sistemas dependiendo de cada caso:
      </p>
      <ul className="list-disc ml-8 mt-4">
        <li>
          Sistemas lineales, tendrán solución si las rectas se intersecan en el
          punto (x, y), y se dice que el sistema es consistente.
        </li>
        <li>
          Las rectas no se cortan por que son paralelas se dice que el sistema
          es inconsistente y no tiene solución.
        </li>
        <li>
          El sistema es equivalente o dependiente, ambas ecuaciones representan
          a la misma recta y el sistema se clasifica como consistente
          dependiente y el número de soluciones es infinito.
        </li>
      </ul>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> resuelva el sistema de
        ecuaciones.
      </p>
      <p className="text-base mt-4 pl-8">{exampleQuestion}</p>
      <p className="text-base mt-4 pl-8 justify-self-center">x + 3y = 9</p>
      <p className="text-base mt-4 pl-8 justify-self-center">2x - y = 4</p>
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
      <br/>
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
      <InfoPopupSistemasEcuaciones isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default SistemasEcuacionesPage;
