"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { QuizComponentProps } from "../../../components/Quiz";
import QuizComponent from "../../../components/Quiz";
import QuizExpresionesAlgebraicasJSON from "./quizexpresionalgebraica.json";
import QuizEcuacionesLinealesJSON from "./quizecuacioneslineales.json";
import QuizEvaluacionFuncionesJSON from "./quizevaluacionfunciones.json";
import QuizFunc2VariablesJSON from "./quizevaluacion2variables.json"; 
import QuizEvalExpresionesAlgebraicasJSON from "./quizevalexpresionalgebraica.json";
import QuizSistemaEcuacionesJSON from "./quizsistemasecuaciones.json";

import QuizCuadradoDeUnaFraccionJSON from "./quizcuadradofraccion.json";
import QuizFraccionesJSON from "./quizfracciones.json";
import QuizMaximoComunDivisorJSON from "./quizmaximocomundivisor.json";
import QuizOperacionesFraccionesJSON from "./quizoperacionesfracciones.json";

import QuizPerigonalPerigonoJSON from "./quizperigonalperigono.json";
import QuizComplementariosSuplementariosJSON from "./quizcomplementariossuplementarios.json";
import QuizAreasPlanasJSON from "./quizareasplanas.json";
import QuizDistanciaDosPuntosJSON from "./quizdistanciadospuntos.json";
import QuizAreasComparacionesJSON from "./quizareascomparaciones.json";
import QuizPerimetroJSON from "./quizperimetro.json";
import QuizPAAJSON from "./quizpaa.json";
import QuizPlanoCartesianoJSON from "./quizplanocartesiano.json";
import QuizSemejanzaCongruenciaJSON from "./quizsemejanzacongruencia.json";
import QuizTriangulosJSON from "./quiztriangulos.json";
import QuizVolumenesJSON from "./quizvolumenes.json";

import QuizDatosGraficadosJSON from "./quizdatosgraficados.json";
import QuizProbabilidad1JSON from "./quizprobabilidad1.json";
import QuizProbabilidad2JSON from "./quizprobabilidad2.json";

const quizesMap: { [key: string]: QuizComponentProps } = {
  'quizconstruccion-de-expresiones-algebraicas': QuizExpresionesAlgebraicasJSON,
  'quizecuaciones-lineales': QuizEcuacionesLinealesJSON,
  'quizevaluacion-de-funciones': QuizEvaluacionFuncionesJSON,
  'quizevaluar-una-ecuacion-con-2-variables': QuizFunc2VariablesJSON,
  'quizevaluar-una-expresion-algebraica': QuizEvalExpresionesAlgebraicasJSON,
  'quizsistemas-de-ecuaciones': QuizSistemaEcuacionesJSON,

  'quizcuadrado-de-una-fraccion': QuizCuadradoDeUnaFraccionJSON,
  'quizfracciones': QuizFraccionesJSON,
  'quizmaximo-comun-divisor': QuizMaximoComunDivisorJSON,
  'quizoperaciones-con-fracciones': QuizOperacionesFraccionesJSON,

  'quizangulo-perigonal-o-perigono': QuizPerigonalPerigonoJSON,
  'quizangulos-complementarios-y-suplementarios': QuizComplementariosSuplementariosJSON,
  'quizareas-de-figuras-planas': QuizAreasPlanasJSON,
  'quizdistancia-entre-dos-puntos': QuizDistanciaDosPuntosJSON,
  'quizejercicios-de-areas-y-comparaciones': QuizAreasComparacionesJSON,
  'quizperimetro': QuizPerimetroJSON,
  'quizperimetros-areas-y-angulos': QuizPAAJSON,
  'quizplano-cartesiano': QuizPlanoCartesianoJSON,
  'quizsemejanza-y-congruencia': QuizSemejanzaCongruenciaJSON,
  'quiztriangulos': QuizTriangulosJSON,
  'quizvolumenes': QuizVolumenesJSON,

  'quizdatos-graficados': QuizDatosGraficadosJSON,
  'quizprobabilidad-1': QuizProbabilidad1JSON,
  'quizprobabilidad-2': QuizProbabilidad2JSON,
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
      />
    </div>
  );  
};

export default QuizPage;
