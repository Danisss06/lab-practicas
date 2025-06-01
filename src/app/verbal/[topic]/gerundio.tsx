"use client";

import { usePathname } from "next/navigation";
import gerundio from "./usogerundio.json";
import InfoPopupUsoGerundio from "./VerbalPopups/UsoGerundioPopup";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const GerundioPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleOptions } = gerundio;

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
        <span className="font-bold">El mal uso del lenguaje</span>
        <br />
        Las faltas que se cometen al hablar o escribir el idioma, reciben el
        nombre común de vicios de dicción, los más comunes son:
      </p>
      <p className="mt-4">
        <span className="text-green-600">Los barbarismos:</span> afectan
        directamente a la prosodia, analogía y ortografía.
      </p>
      <p className="mt-4">
        <span className="text-green-600">Los solecismos:</span> violan las leyes
        de la sintaxis.
      </p>
      <ol className="mt-4 list-decimal list-outside pl-8">
        <li>Escribir mal una palabra.</li>
        <li>Acentuar mal la palabra.</li>
        <li>Pronunciar mal la palabra.</li>
        <li>Emplear inútilmente voces de otros idiomas (anglicismos, galicismos, italianismos, etc.).</li>
        <li>
          Adoptar para la transcripción de voces extranjeras, letras distintas a
          las que pide el español.
        </li>
        <li>Usar inútilmente arcaísmos en el estilo moderno.</li>
        <li>Emplear neologismos inútiles.</li>
        <li>Usar una dicción en sentido distinto del que le corresponde.</li>
      </ol>

      <p className="mt-4">
        <span className="font-bold">El mal uso del gerundio</span>
        <br />
        El gerundio es un derivado verbal que desempeña el oficio de adverbio,
        expresa simultaneidad, con el verbo que lo precede; la frase que
        contiene al gerundio viene a ser una locución adverbial que modifica al
        principal verbo de la oración. Por consiguiente, es totalmente
        incorrecto usar el gerundio cuando la acción que expresa no es
        simultánea con la del otro verbo.
      </p>
      <p className="mt-4">
        Así el gerundio denota <span className="underline">coexistencia</span> o{" "}
        <span className="underline">anterioridad inmediata</span> pero{" "}
        <span className="underline">nunca</span>,{" "}
        <span className="underline">posteridad</span>.
      </p>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identifica el inciso que tiene la oración en que se utiliza correcta o incorrectamente las palabras subrayadas.
      </p>
      <p className="text-base mt-4 ml-8">
        1. Es el inciso que tiene la oración en donde está incorrectamente utilizada la palabra subrayada.
      </p>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className={`bg-[var(--quiz-options-btn-bg)] text-[var(--quiz-options-btn-text)] p-4 rounded-2xl mt-4 transition-all hover:scale-105`}
          >
            <p dangerouslySetInnerHTML={{ __html: option }} />
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
      <InfoPopupUsoGerundio
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default GerundioPage;
