"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { QuizComponentProps } from "../../../components/Quiz";
import QuizComponent from "../../../components/Quiz";
import QuizClasesDeOracionJSON from './quizclasesoracion.json';
import QuizCoordinantesYSubordinantesJSON from './quizcoordsub.json';
import QuizElUsoDelGerundio from './quizusogerundio.json';
import QuizLecturas from './quizlecturas.json';
import QuizLosElementosComunesDeLaOracion from './quizelecomunes.json';
import QuizOrtografia from './quizortografia.json';
import QuizSignificadoDeUnaOracion from './quizsigoracion.json';
import QuizUsoDeLasPalabrasEnlazantes from './quizpalabrasenlazantes.json';
import QuizUsoDeLasPreposiciones from './quizusopreposiciones.json';

const quizesMap: { [key: string]: QuizComponentProps } = {
  'quizclases-de-oracion': QuizClasesDeOracionJSON,
  'quizcoordinantes-o-subordinantes': QuizCoordinantesYSubordinantesJSON,
  'quizel-uso-del-gerundio': QuizElUsoDelGerundio,
  'quizlecturas': QuizLecturas,
  'quizlos-elementos-comunes-de-la-oracion': QuizLosElementosComunesDeLaOracion,
  'quizortografia': QuizOrtografia,
  'quizsignificado-de-una-oracion': QuizSignificadoDeUnaOracion,
  'quizuso-de-las-palabras-enlazantes': QuizUsoDeLasPalabrasEnlazantes,
  'quizuso-de-las-preposiciones': QuizUsoDeLasPreposiciones,
};

/**
 * @returns a component with the quiz page corresponding to 
 * a specific topic. The json to pass is obtained from the
 * last part of the pathname by mapping it to the corresponding
 * json file.
 */
const QuizPage: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.substring(pathname.lastIndexOf("/") + 1);

  const jsonToPass = quizesMap[lastPath];
  const defaultDescription = 'Lee y responde las preguntas del siguiente ejercicio.';

  if (!jsonToPass) {
    return <p>Ejercicio no encontrado. Puede encontrarse en desarrollo.</p>;
  }

  return (
    <div className="mb-24 w-full">
      <QuizComponent 
        title={jsonToPass.title}
        description={defaultDescription}
        questions={jsonToPass.questions}
        questionDescription={jsonToPass.questionDescription || ""}
        images={jsonToPass.images}
        responseImages={jsonToPass.responseImages}
      />
    </div>
  );
};

export default QuizPage;

