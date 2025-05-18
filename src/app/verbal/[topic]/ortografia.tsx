"use client";

import { usePathname } from "next/navigation";
import ortografia from "./ortografia.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const OrtografiaPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer } = ortografia;

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
        La ortografía es el uso correcto de las letras para escribir palabras.
        Concretamente el término ortografía indica que las letras se usan de
        acuerdo con unas determinados convencionalismos que se expresan a través
        de un conjunto de normas. Éstas establecen el uso correcto de las letras
        y los demás signos gráficos en la escritura de una lengua cualquiera en
        un tiempo concreto.
      </p>
      <p className="mt-4">
        Reglas de ortografía para el uso de la &quot;s&quot;, &quot;c&quot; y &quot;z&quot;
        <br />
        Uso de las letras dudosas
      </p>
      <p className="mt-4">
        Se escriben con <span className="font-bold">&quot;s&quot;</span> los derivados nominales de los verbos terminados en
        <span className="font-bold">&quot;der&quot;</span>, <span className="font-bold">&quot;dir&quot;</span> o <span className="font-bold">&quot;tir&quot;</span>, excepto rendir. Se escribe <span className="font-bold">&quot;c&quot;</span> antes de la e, i
        menos en un grupo de palabras en que se escribe <span className="font-bold">&quot;z&quot;</span>.
      </p>
      <p className="mt-4">
        Se escribe &quot;z&quot; antes de la a, la o y la u cuando fonéticamente no es
        posible el empleo de la &quot;c&quot;.
      </p>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identifica el inciso
        que tiene la oración en que se utiliza correcta o incorrectamente las
        palabras subrayadas.
      </p>
      <p className="text-base mt-4">{exampleQuestion}</p>
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

export default OrtografiaPage;
