"use client";

import { usePathname } from "next/navigation";
import lecturas from "./lecturas.json";
import CustomPopUp from "../../components/CustomPopUp";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/hooks/useDarkMode";

const LecturasPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const [isDarkMode] = useDarkMode();

  const { topic, exampleQuestion, exampleOptions, answer } = lecturas;

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
        En esta sección se ejercita la habilidad para leer en forma analítica y
        razonar sobre el contenido de la lectura, comprender los argumentos del
        autor, reconocer las ideas implícitas y explícitas, determinar
        significados contextuales así como establecer relaciones entre textos.
      </p>
      <p className="mt-4">
        Al leer cuidadosamente los siguientes pasajes, pregúntate: ¿Cuál es el
        tema que se aborda?, ¿Qué sentimientos despierta en mí?, ¿Qué actitud
        muestran los personajes?, ¿Cuál es la idea principal?
      </p>
      <p className="mt-4">
        Una vez que hayas resuelto esas interrogantes, intenta contestar cada
        pregunta, releyéndola cuantas veces sea necesario. Pero recuerda que
        cuando tú vayas a hacer tu examen de admisión, tu tiempo estará muy
        controlado, por lo que se te sugiere que practiques tu lectura.
      </p>
      <p className="mt-4 font-bold text-green-500">Ejemplo</p>
      <p className="mt-4">
        <span className="font-bold">Instrucciones:</span> lee el pasaje y
        selecciona la mejor respuesta para cada pregunta, basándote en lo que la
        lectura afirma o implica.
      </p>
      <p className="mt-4 pl-8">
        Corría el año de 1847 y con él los días aciagos y tristes. El ejército
        norteamericano había hollado nuestro suelo. Llegó agosto y los invasores
        acercaban sus huestes a la capital. Nuestros patriotas soldados vendían
        cara su vida en los campos de Padierna y en la defensa del Convento de
        Churubusco, que se tomó a sangre y fuego. La historia dice que cuando el
        jefe invasor llegó al convento, salió a encontrarlo el heroico General
        Anaya, que lo había defendido. Entonces, aquél pregunta al General
        Anaya: ¿Dónde está el parque?
      </p>
      <p className="pl-8">
        Y Anaya contesta: &quot;Si hubiera parque, no estuviera usted aquí&quot;.
      </p>
      <p className="mt-4 pl-8">
        La frase tiene el, épico sonido de la fanfarria de gloria. Caía un héroe
        altivo y valiente, como aquel otro de la leyenda, Cuauhtémoc, quien al
        llegar frente al soberbio conquistador Cortés, le dijo: &quot;Ya que no pude
        salvar mi Patria, saca ese puñal que tienes en el cinto y clávalo en mi
        corazón&quot;.
      </p>
      <p className="text-base mt-4 pl-8">
        1. Los sentimientos predominantes en la lectura son todos los
        siguientes, EXCEPTO el del inciso:
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
      <p className={`mt-4 text-[var(--text-color)]`}>
        Nota: Podrás retomar el ejercicio cuantas veces lo desees.
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

export default LecturasPage;
