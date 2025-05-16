"use client";

import { usePathname } from "next/navigation";
import areasPlanas from "./areasplanas.json";
import InfoPopupAreasPlanas from './InfoMathPopup/AreasPlanasPopup';
import { useState } from "react";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import Link from "next/link";

const Probabilidad1Page: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer, imageURL } =
    areasPlanas;

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
        className="w-full h-full object-cover mt-4 justify-self-center"
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
        Se presentan algunas figuras planas y sus fórmulas correspondientes para
        la determinación de su área y perímetro.
      </p>
      <div className={`grid grid-cols-2 gap-4 p-4 bg-[var(--math-table-bg)] mt-4`}>
        {/* Row 1: Headers */}
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}> Figura </div>
        <div className={`bg-[var(--math-table-header)] font-bold text-center p-2`}> Fórmulas </div>

        {/* Row 2: Square */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>Cuadrado de lado L</p>
          <div className="w-16">{renderImage(imageURL[0])}</div>
          <p>
            <strong>Lado</strong> = L
          </p>
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            <strong>Área</strong> = (L)(L) = L<sup>2</sup>
          </p>
          <p>
            <strong>Perímetro</strong> = L + L + L + L = 4L
          </p>
        </div>

        {/* Row 3: Rectangle */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>Rectángulo</p>
          <div className="w-48">{renderImage(imageURL[1])}</div>
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            <strong>Área</strong> = (b)(a) = ba
          </p>
          <p>
            <strong>Perímetro</strong> = 2b + 2a
          </p>
        </div>

        {/* Row 4: Circle */}
        <div className="p-4 bg-[var(--math-table-bg)] border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>Círculo</p>
          <div className="w-16">{renderImage(imageURL[2])}</div>
          <p>
            <strong>Radio</strong> = r
          </p>
          <p>
            <strong>Diámetro</strong> = d
          </p>
        </div>
        <div className="p-4 border" style={{ borderColor: "var(--math-table-border)" }}>
          <p>
            <strong>Área</strong> = πr<sup>2</sup>
          </p>
          <p>
            <strong>Perímetro (circunferencia)</strong> = 2πr = πd
          </p>
          <p>
            <strong>Radio</strong> = <sup>d</sup>/<sub>2</sub>
          </p>
        </div>
      </div>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> resuelve el problema
        de figuras planas.
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
      <p className={`mt-4 text-[var(--text-color)]`}>
        Nota: Podrás retomar el ejercicio cuantas veces lo desees.
      </p>

      {/* Popup component */}
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}

      <InfoPopupAreasPlanas
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default Probabilidad1Page;
