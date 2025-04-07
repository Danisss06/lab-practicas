"use client";

import { usePathname } from "next/navigation";
import evaluacionFunciones from "./evaluacionfunciones.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const EvaluacionFuncionesPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL, description } =
    evaluacionFunciones;

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
        className="w-48 h-full object-cover mt-4 rounded-2xl justify-self-center"
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
        Una relación matemática puede expresarse como un conjunto de pares
        ordenados (x, y). Los elementos de estos pares ordenados satisfacen
        alguna condición matemática previamente establecida entre ellos.
      </p>
      <p className="mt-4">
        Cuando un conjunto de pares ordenados satisfacen la condición:{" "}
        <span className="font-bold">
          &quot;a cada valor de x le corresponde un único valor de y&quot;
        </span>
        , se dice que ese conjunto de pares ordenados representan a una{" "}
        <span className="font-bold">función</span>y cuando se tiene ese caso,{" "}
        <span className="font-bold">&quot;y&quot;</span>
        se representa como <span className="font-bold">f(x)</span>, esto es:{" "}
        <span className="font-bold">y = f(x)</span>. Por ejemplo, la relación
        que se expresa:{" "}
        <span className="font-bold">
          {"{"}( 1, 2 ), ( 2, 4 ), ( 3, 6 ), ( 4, 8 ),...{"}"}
        </span>
        , satisface la condición: &quot;el valor de{" "}
        <span className="font-bold">y</span> es el doble del valor de{" "}
        <span className="font-bold">x</span>&quot;. Representa una función
        porque a cada valor de <span className="font-bold">&quot;x&quot;</span>
        le corresponde un solo valor de{" "}
        <span className="font-bold">&quot;y&quot;</span>.
      </p>
      <p className="mt-4">
        Por lo que, para los valores de x = 1, 2, 3, se tiene:
      </p>
      <div className="p-4 justify-self-center text-center">
        <p className="font-bold">y = f(x) = 2x</p>
        <p>f(1) = 2(1) = 2 &nbsp; → &nbsp; y = 2</p>
        <p>f(2) = 2(2) = 4 &nbsp; → &nbsp; y = 4</p>
        <p>f(3) = 2(3) = 6 &nbsp; → &nbsp; y = 6</p>
      </div>
      <p className="mt-4">
        El siguiente ejemplo permite analizar la función y = f ( x ) = x2 - 3
        donde los valores de &quot;x&quot; son: -2, 0, 1, 2.
      </p>
      {renderImage(imageURL)}
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> analiza la siguiente
        función y encuentra el valor de{" "}
        <span className="font-bold">&quot;y&quot;</span> dado el valor de{" "}
        <span className="font-bold">&quot;x&quot;</span>.
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
            Tomar Ejercicio
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
        description={description}
        isDarkMode={isDarkMode}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default EvaluacionFuncionesPage;
