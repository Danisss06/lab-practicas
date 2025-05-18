"use client";

import { usePathname } from "next/navigation";
import analogia from "./analogia.json";

const SecuenciasYMatricesPage: React.FC = () => {
  const pathname = usePathname();

  const {
    topic,
    exampleQuestion,
    exampleOptions,
    answer
  } = analogia;

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
    
  const handleSeeAnswer = (
    exampleQuestion: string,
    exampleOptions: string[],
    answer: number
  ) => {
    alert(`La respuesta correcta es: ${exampleOptions[answer]}`);
  };

  return (
    <>
      <h1 className="text-xl font-bold">{topic}</h1>
      <p className="mt-4">
        La analogía expresa una relación de semejanza entre seres o cosas
        diferentes. Generalmente, aunque hay excepciones, una analogía es
        bidireccional, es decir, la relación ocurre tanto de izquierda a derecha
        como de derecha a izquierda.
      </p>
      <p className="mt-4">
        Para encontrar la respuesta que completa una analogía se busca que se
        cumplan tres clases de relación:
      </p>
      <ol className="px-8 list-decimal list-inside mt-4">
        <li>Relación de contenido</li>
        <li>Relación de orden</li>
        <li>Relación de forma gramatical</li>
      </ol>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> en el siguiente
        ejemplo se presenta una relación entre los términos{" "}
        <span className="font-bold">Gato</span> y{" "}
        <span className="font-bold">felino</span>. Después se presenta un
        término que se encuentra subrayado. Selecciona la opción que se
        relaciona con el término subrayado de la misma forma en que se
        relacionan los dos primeros términos.
      </p>
      <p className="text-base mt-4">
        1. Gato es a felino como <span className="underline">cero</span> es a:
      </p>
      <div className="w-full flex flex-row gap-4 justify-center">
        {exampleOptions.map((option, index) => (
          <div
            key={index}
            className={`bg-[var(--quiz-options-btn-bg)] text-[var(--quiz-options-btn-text)] p-4 rounded-2xl mt-4 transition-all hover:scale-105`}          
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row justify-center gap-6">
        <button
          className={`cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          onClick={() =>
            handleSeeAnswer(exampleQuestion, exampleOptions, answer)
          }
        >
          Ver respuesta
        </button>
        <button
          className={`min-h-14 cursor-pointer transition-all ${backgroundColor} text-black px-6 py-2 rounded-2xl
${backgroundColor2}
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
        >
          Tomar ejercicio
        </button>
      </div>
      <br/>
      <p className={`mt-4 text-[var(--text-color)]`}>
        <strong>Nota:</strong> Podrás retomar el ejercicio cuantas veces lo desees.
      </p>
    </>
  );
};

export default SecuenciasYMatricesPage;
