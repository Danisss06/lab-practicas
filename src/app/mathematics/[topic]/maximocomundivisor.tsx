"use client";

import { usePathname } from "next/navigation";
import maximoComunDivisor from "./maximocomundivisor.json";
import InfoPopupMaxComunDiv from './InfoMathPopup/MaxComunDivPopup';
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const MaximoComunDivisorPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, imageURL } = maximoComunDivisor;

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
        className="w-96 h-full object-cover mt-4 rounded-2xl justify-self-center"
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
        El <span className="font-bold">máximo común divisor</span> de dos o más
        números, también llamado <span className="font-bold">factor común</span>
        , es el mayor número o factor que divide exactamente a todos y cada uno
        esos números.
      </p>
      <p className="mt-4">
        Por ejemplo para encontrar el máximo común divisor de 10, 20, 30, 40. Se
        utilizaran los siguientes métodos:
      </p>

      <p className="mt-4 font-bold">Métodos de los múltiplos</p>
      <p className="mt-4 ml-4">
        1. Para este método se escriben todos los divisores de cada número:
      </p>
      <ul className="list-none space-y-2 mt-2 ml-12">
        <li>Divisores de 10: 1, 2, 5, 10.</li>
        <li>Divisores de 20: 1, 2, 4, 5, 10, 20.</li>
        <li>Divisores de 30: 1, 2, 5, 6, 10, 15, 30.</li>
        <li>Divisores de 40: 1, 2, 4, 5, 8, 10, 20, 40.</li>
      </ul>
      <p className="mt-4 ml-4">
        2. Se observa que los factores que se repiten son: 2, 5, 10, que están
        en todos ellos.
      </p>
      <p className="mt-4 ml-4">
        3. Entonces el{" "}
        <span className="font-bold">máximo factor común (MCD)</span> es igual a{" "}
        <span className="font-bold">10.</span>
      </p>

      <p className="mt-4 font-bold">Método de factores primos</p>
      {renderImage(imageURL)}
      <p className="mt-4">
        Por lo que, el <span className="font-bold">máximo común divisor</span>{" "}
        sería igual a <span className="font-bold">2 x 5. MCD = 10.</span>
      </p>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> encuentra el máximo
        común divisor utilizando alguno de los métodos estudiados.
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
      <InfoPopupMaxComunDiv isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup} />
    </>
  );
};

export default MaximoComunDivisorPage;
