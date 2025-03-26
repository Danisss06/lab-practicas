"use client";

import { usePathname } from "next/navigation";
import CustomPopUp from "../../components/CustomPopUp";
import razonamientopractico from './razonamientopractico.json';
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const RazonamientoPracticoPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const {
    topic,
    exampleQuestion,
    exampleOptions,
    answer,
    description
  } = razonamientopractico;

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
        En los siguientes ejercicios se describen situaciones que te conducen a suponer la consecuencia que tendrá algún evento y se te proporcionan los posibles resultados de tu hipótesis.
      </p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> selecciona la conclusión que concuerda con la información proporcionada.
      </p>
      <p className="text-base mt-4 pl-8">
        1. Para el baile de graduación, Cecilia recibió varias invitaciones:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li className="mt-2">Raúl la invitó a ir a cenar a Vips y después a ir a la disco de moda.</li>
        <li className="mt-2">Jorge le propuso ir a cenar a casa de sus padres y después ir a casa de Sara, donde ésta y Rebeca pasarían un rato con varios amigos, bailando y platicando; pero si ella lo prefería irían a Chilis después de la cena, a platicar con varios compañeros.</li>
        <li className="mt-2">Por su parte Gabriel, le pidió que lo acompañara a cenar a Chilis donde se iban a encontrar otros amigos a departir después de la cena.</li>
        <li className="mt-2">Los papás de Cecilia, que llevan una muy buena amistad con los papás de Javier de quien tienen, además, la esperanza de que éste logre conquistarla, le propusieron ir a cenar los seis y posteriormente ir al teatro.</li>
        <li className="mt-2">Fernando otro de sus compañeros invitó a Cecy a cenar al Fiesta Americana y después ir a bailar un rato a casa de Sara.</li>
        <li className="mt-2">Cecilia se sintió abrumada por tantas atenciones, pero ella decidió pasar todo el tiempo con el chico que le gusta y pidió disculpas a los demás.</li>
        <li className="mt-2">Ella no cenó en ningún restaurante y después de la cena ella y su acompañante departieron con Gabriel y varios amigos en Chilis.</li>
      </ul>
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
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default RazonamientoPracticoPage;
