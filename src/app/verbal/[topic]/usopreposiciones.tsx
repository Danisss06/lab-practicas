"use client";

import { usePathname } from "next/navigation";
import usoPreposiciones from "./usopreposiciones.json";
import InfoPopup from './VerbalPopups/UsoPreposicionesPopup';
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const UsoPreposicionesPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleOptions, imageURL } =
    usoPreposiciones;

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
        className="w-80 h-full object-cover mt-4 rounded-2xl justify-self-center"
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

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        Las preposiciones son elementos de enlace entre dos o más palabras o
        elementos de la frase u oración. Cuando la preposición se antepone a un
        sustantivo lo convierte en complemento de otro sustantivo o bien, en
        complemento de un verbo, de una adjetivo o de un adverbio.
      </p>
      <p className="mt-4">
        De esta manera, esta clase de complemento está compuesto de
        preposiciones y de término.
      </p>
      <p className="mt-4">
        La preposición sirve para anunciar el término y éste, está constituido
        por la palabra o palabras en que concluye la relación que se está
        expresando.
      </p>
      <div className="flex justify-center">
        {renderImage(imageURL)}
      </div>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identifica el inciso
        que tiene la oración en la cual la palabra (o palabras) subrayada está
        empleada <span className="font-bold text-green-800">correcta</span> o{" "}
        <span className="font-bold text-green-800">incorrectamente.</span>
      </p>
      <p className="text-base mt-4">
        1. Es el inciso en el cual la palabra subrayada está empleada
        incorrectamente.
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
      <br/>
      <p className={`mt-4 text-[var(--text-color)]`}>
        <strong>Nota:</strong> Podrás retomar el ejercicio cuantas veces lo desees.
      </p>

      {/* Popup component */}
      <InfoPopup isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default UsoPreposicionesPage;
