"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { QuizComponentProps } from "../../../components/Quiz";
import QuizComponent from "../../../components/Quiz";
import QuizAnalogiaJSON from "./quizanalogia.json";
import QuizDiagramas1JSON from "./quizdiagramas1.json";
import QuizDiagramas2JSON from "./quizdiagramas2.json";
import QuizMetaforasYAnalogiasJSON from "./quizmetaforayanalogia.json";
import QuizRazonamientoCondicionalJSON from "./razcondicional.json";
import QuizRazonamientoPracticoJSON from "./razpractico.json";
import QuizSecuenciasYMatricesJSON from "./secymatrices.json";
import QuizSignificadoDeMetaforasJSON from "./significadometaforas.json";
import QuizTransformacionesLogicasJSON from "./translogicas.json";

const quizesMap: { [key: string]: QuizComponentProps } = {
  quizanalogia: QuizAnalogiaJSON,
  'quizdiagramas-1': QuizDiagramas1JSON,
  'quizdiagramas-2': QuizDiagramas2JSON,
  'quizmetaforas-y-analogias': QuizMetaforasYAnalogiasJSON,
  'quizrazonamiento-condicional': QuizRazonamientoCondicionalJSON,
  'quizrazonamiento-practico': QuizRazonamientoPracticoJSON,
  'quizsecuencias-y-matrices': QuizSecuenciasYMatricesJSON,
  'quizsignificado-de-metaforas': QuizSignificadoDeMetaforasJSON,
  'quiztransformaciones-logicas': QuizTransformacionesLogicasJSON 
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

  const quizTitle: string = lastPath.substring(4);
  const defaultDescription: string = 'Lee y responde las preguntas del siguiente quiz.';

  if (!jsonToPass) {
    return <p>Quiz no encontrado. Puede encontrarse en desarrollo.</p>;
  } 

  return (
    <div className="mb-24 w-full">
      <QuizComponent 
        title={quizTitle} 
        description={defaultDescription} 
        questions={jsonToPass.questions} 
        images={jsonToPass.images}
        responseImages={jsonToPass.responseImages}
      />
    </div>
  );  
};

export default QuizPage;
