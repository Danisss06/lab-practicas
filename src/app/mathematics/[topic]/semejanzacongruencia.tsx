"use client";

import { usePathname } from "next/navigation";
import semejanzaCongruencia from "./semejanzacongruencia.json";
import CustomPopUp from "../../components/CustomPopUp";
import InfoPopupCongruenciaTriangulos from "./MathPopup/CongruenciaTriangulos";
import InfoPopupSemejanzaTriangulos from "./MathPopup/SemejanzaTriangulos";
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const SemejanzaCongruenciaPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL } =
    semejanzaCongruencia;

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

  const [isPopupCongruenciaOpen, setPopupCongruenciaOpen] = useState(false);
  const [isPopupSemejanzaOpen, setPopupSemejanzaOpen] = useState(false);

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        Las <span className="font-bold">figuras congruentes</span> tienen
        exactamente <span className="font-bold">la misma forma</span> y el{" "}
        <span className="font-bold">mismo tamaño.</span>
      </p>
      <div className="flex flex-row">
        <p className="mt-4">
          El símbolo que se utiliza para indicar congruencia es:
        </p>
        <div className="w-6 h-6 ml-2">{renderImage(imageURL[1])}</div>
      </div>
      <button className="underline mt-4 ml-6" onClick={() => setPopupCongruenciaOpen(true)}>
        Teoremas sobre congruencia de dos triángulos
      </button>
      <p className="mt-4">
        Las <span className="font-bold">figuras semejantes</span> tienen la
        misma forma pero diferente tamaño.
      </p>
      <div className="flex flex-row">
        <p className="mt-4">
          El símbolo que se utiliza para indicar semejanza es:
        </p>
        <div className="w-12 h-8 ml-2">{renderImage(imageURL[2])}</div>
      </div>
      <button className="underline mt-4 ml-6" onClick={() => setPopupSemejanzaOpen(true)}>
        Teorema sobre semejanza de triángulos
      </button>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identificar la
        relación de las figuras.
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
      <p className={`mt-4 text-[var(--text-color)]`}>
        Nota: Podrás retomar el ejercicio cuantas veces lo desees.
      </p>

      {/* Popup component */}
      <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isDarkMode={isDarkMode}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />

      {/* Info Popup */}
      <InfoPopupCongruenciaTriangulos
        isOpen={isPopupCongruenciaOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupCongruenciaOpen(false)}
      />
      <InfoPopupSemejanzaTriangulos
        isOpen={isPopupSemejanzaOpen}
        isDarkMode={isDarkMode}
        onClose={() => setPopupSemejanzaOpen(false)}
      />
    </>
  );
};

export default SemejanzaCongruenciaPage;
