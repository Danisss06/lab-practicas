"use client";

import { usePathname } from "next/navigation";
import coordYSubordinantes from "./coordinantesosubordinantes.json";
import InfoPopupCoordSub from "./VerbalPopups/CoordSubPopup";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const CoordYSub: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleOptions } =
    coordYSubordinantes;

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
        Las palabras coordinantes o subordinantes, tienen como función enlazar o
        unir dos o más oraciones, o dos o más partes o miembros de la misa
        oración.
      </p>
      <p className="mt-4">
        Pueden escribirse unidas o separadas, para la cual se aplican ciertas
        reglas, por ejemplo:
      </p>
      <p className="mt-4">
        <span className="font-bold">Adonde:</span> Adverbio relativo, se usa
        cuando el <span className="text-green-700">antecedente va expreso</span>{" "}
        y también{" "}
        <span className="text-green-700">como adverbio interrogativo.</span> &quot;<span>Pepe va a la misma escuela </span><span className="text-green-700">adonde</span><span> tu vas.&quot;</span> &quot;¿
        <span className="text-green-700">Adónde</span> vas tan temprano?&quot;
      </p>
      <p className="mt-4">
        <span className="font-bold">A donde:</span> Adverbio relativo, se usa
        cuando el <span className="text-green-700">antecedente va tácito.</span>{" "}
        &quot;No quiso decirnos <span className="text-green-700">a donde</span>{" "}
        iban.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Asimismo:</span> (adverbio de modo), se
        utiliza para indicar también (como afirmación de{" "}
        <span className="text-green-700">igualdad</span>, semejanza, conformidad
        o relación). Ejemplo: &quot;Hemos dedicado mucho tiempo a estar juntos,{" "}
        <span className="text-green-700">asimismo</span> como a divertirnos.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Así mismo:</span> Se utiliza para indicar
        del mismo modo, de la misma manera o forma, tal cual. Ejemplo: &quot;Él me
        ordenó hacer el escrito{" "}
        <span className="text-green-700">así mismo</span>.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">A sí mismo:</span> Se refiere a una acción
        hecha por la persona sobre ella misma. Ejemplo: &quot;Se dedicó{" "}
        <span className="text-green-700">a sí mismo</span> todo el tiempo que
        necesitaba para reflexionar.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Dondequiera:</span> Adverbio que indica en
        cualquier parte. Ejemplo: &quot;
        <span className="text-green-700">Dondequiera</span> que te encuentres,
        no me olvides.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Donde quiera:</span> Adverbio y verbo o modo
        adverbial. Ejemplo: &quot;Iremos{" "}
        <span className="text-green-700">donde quiera</span> Mónica.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Porque:</span> Conjunción causal. Ejemplo:
        &quot;La abandonó <span className="text-green-700">porque</span> ella lo
        quiso.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Por qué:</span> Preposición y pronombre
        investigativo, ponderativo, interrogativo y dubitativo. Ejemplo: &quot;Ella
        logró sus propósitos, sabe Dios{" "}
        <span className="text-green-700">por qué</span> diabólicos medios.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Porqué:</span> Sustantivo, sinónimo de
        causa, motivo, porción, cantidad. Ejemplo: &quot;Ignoro el{" "}
        <span className="text-green-700">porqué</span> de su actitud.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Quienquiera:</span> Pronombre que designa a
        una persona indeterminada. Ejemplo: &quot;
        <span className="text-green-700">Quienquiera</span> que sea deberá ser
        mayor de edad.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Quien quiera:</span> Pronombre y verbo.
        Ejemplo: &quot;<span className="text-green-700">Quien quiera</span> asesoría
        que lo diga.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Si no:</span> Adverbios; afirmación y
        negación, indica concesión. Ejemplo: &quot;Cuida tu alimentación,{" "}
        <span className="text-green-700">si no</span> engordarás muy pronto.&quot;
      </p>

      <p className="mt-4">
        <span className="font-bold">Sino:</span> Conjunción adversativa o de
        excepción que enlaza dos oraciones, la segunda de las cuales indica
        oposición o contrariedad respecto a la primera. Ejemplo: &quot;Su vestido no
        es negro, <span className="text-green-700">sino</span> gris.&quot;
      </p>

      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> identifica el inciso
        que tiene la oración en que se utiliza correcta o incorrectamente las
        palabras subrayadas.
      </p>
      <p className="text-base mt-4 ml-8">
        1. El inciso que tiene la oración en que se utiliza{" "}
        <span className="font-bold">correctamente</span> las palabras subrayadas
        es:
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
      {/* <CustomPopUp
        title={exampleQuestion}
        answer={`La respuesta correcta es: ${exampleOptions[answer]}`}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      /> */}
      <InfoPopupCoordSub
        isOpen={isPopupOpen}
        isDarkMode={isDarkMode}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default CoordYSub;
