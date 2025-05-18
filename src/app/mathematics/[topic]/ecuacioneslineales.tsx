"use client";

import { usePathname } from "next/navigation";
import ecuacionesLineales from "./ecuacioneslineales.json";
import InfoPopupEcuacionesLineales from './InfoMathPopup/EcuacionesLinealesPopup'
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const EcuacionesLinealesPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer } = ecuacionesLineales;

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
        Una ecuación es una igualdad matemática que contiene una o más
        incógnitas y el signo &quot; = &quot;, que separa los dos lados de la
        ecuación.
      </p>
      <p className="mt-4">
        A continuación se presentan algunas propiedades básicas de la{" "}
        <span className="font-bold">igualdad:</span>
      </p>
      <div className={`grid grid-cols-2 gap-4 p-4 bg-[var(--math-table-bg)] mt-4`}>
        {/* Row 1: Headers */}
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>Propiedad</div>
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>Ejemplo</div>

        {/* Row 2: Addition/Subtraction Property */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          Si a ambos lados del igual se añade o se resta el mismo número, la
          ecuación no se altera.
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>Dada la ecuación:</p>
          <p>
            3 - 9 + 17 = 6 + 5<br />
            11 = 11
          </p>
          <ul className="list-disc pl-6">
            <li>
              Si se suma -5 a ambos lados:
              <p>
                3 - 9 + 17 - 5 = 6 + 5 - 5<br />6 = 6 Sigue siendo una igualdad
              </p>
            </li>
            <li>
              Si ahora se suma 8 en ambos lados:
              <p>
                3 - 9 + 17 - 5 + 8 = 6 + 5 - 5 + 8<br />
                14 = 14 Sigue siendo una igualdad
              </p>
            </li>
          </ul>
        </div>

        {/* Row 3: Multiplication Property */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          Si a ambos lados se multiplican por la misma cantidad, la ecuación no
          se altera.
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>Dada la ecuación:</p>
          <p>3 - 9 + 17 = 5 + 8 = 6 + 5 + 8</p>
          <ul className="list-disc pl-6">
            <li>
              Si se multiplica por 7 ambos lados:
              <p>
                (1/7)(3 - 9 + 17 - 5 + 8) = (1/7)(6 + 5 + 8)
                <br />2 = 2 Sigue siendo una igualdad
              </p>
            </li>
            <li>
              Si se multiplica por -5 ambos lados:
              <p>
                (-5/7)(3 - 9 + 17 - 5 + 8) = (-5/7)(6 + 5 + 8)
                <br />
                -10 = -10 Sigue siendo una igualdad
              </p>
            </li>
          </ul>
        </div>

        {/* Row 4: Commutative Property */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          Se puede intercambiar los lados de la igualdad, respetando los signos
          de cada término y la ecuación no se altera.
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>La ecuación:</p>
          <p>35 - 23 = 19 - 7</p>
          <p>Es lo mismo que:</p>
          <p>19 - 7 = -23 + 35</p>
        </div>

        {/* Row 5: Multiplication Signs */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          Los signos en la multiplicación.
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            (+) * (+) = +<br />
            (+) * (-) = -<br />
            (-) * (+) = -<br />
            (-) * (-) = +
          </p>
        </div>

        {/* Row 6: Division Signs */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          Los signos en la división.
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            (+) / (+) = +<br />
            (+) / (-) = -<br />
            (-) / (+) = -<br />
            (-) / (-) = +
          </p>
        </div>
      </div>
      <p className="mt-4">
        A continuación se presentan algunas propiedades básicas de la{" "}
        <span className="font-bold">igualdad:</span>
      </p>
      <div className={`grid grid-cols-2 gap-4 p-4 bg-[var(--math-table-bg)] mt-4`}>
        {/* Row 1: Headers */}
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>Propiedad</div>
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}>Ejemplo</div>

        {/* Row 2: Additive Inverse Property */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            Todo número excepto el cero, tiene su{" "}
            <strong>inverso aditivo</strong>, también llamado{" "}
            <strong>opuesto</strong>.
          </p>
          <p>
            Los números inversos aditivos cuando se suman dan como resultado
            cero.
          </p>
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>+2 - 2 = 0</p>
          <p>
            <sup>1</sup>/<sub>2</sub> + -<sup>1</sup>/<sub>2</sub> = 0
          </p>
          <p>-3 + 3 = 0</p>
        </div>

        {/* Row 3: Multiplicative Inverse Property */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            Todo número, excepto el cero, tiene su{" "}
            <strong>inverso multiplicativo</strong>, también llamado{" "}
            <strong>recíproco</strong>.
          </p>
          <p>
            Los números inversos multiplicativos cuando se multiplican dan como
            producto uno.
          </p>
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>(-2) &times; (-1/2) = 1</p>
          <p>
            <sup>1</sup>/<sub>2</sub> &times; <sup>2</sup>/<sub>1</sub> = 1
          </p>
          <p>
            <sup>7</sup>/<sub>8</sub> &times; -<sup>8</sup>/<sub>7</sub> = 1
          </p>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> resuelve el siguiente
        problema considerando las propiedades de la igualdad y números.
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
      <InfoPopupEcuacionesLineales isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default EcuacionesLinealesPage;
