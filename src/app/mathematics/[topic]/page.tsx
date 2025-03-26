"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';

const ExpresionesAlgebraicasComponent = dynamic(() => import('./expresionesalgebraicas'));
const EcuacionesLinealesComponent = dynamic(() => import('./ecuacioneslineales'));
const EvaluacionFuncionesComponent = dynamic(() => import('./evaluacionfunciones'));
const FuncDosVariablesComponent = dynamic(() => import('./funcdosvariables'));
const ExpresionAlgebraicaComponent = dynamic(() => import('./evalexpresionalgebraica'));
const SistemasEcuacionesComponent = dynamic(() => import('./sistemasecuaciones'));
const CuadradoFraccionComponent = dynamic(() => import('./cuadradofraccion'));
const FraccionesComponent = dynamic(() => import('./fracciones'));
const MaximoComunDivisorComponent = dynamic(() => import('./maximocomundivisor'));
const OperacionesFraccionesComponent = dynamic(() => import('./operacionesfracciones'));
const AnguloPerigonalPerigonoComponent = dynamic(() => import('./perigonalperigono'));
const DatosGraficadosComponent = dynamic(() => import('./datosgraficados'));
const Probabilidad1Component = dynamic(() => import('./probabilidad1'));
const Probabilidad2Component = dynamic(() => import('./probabilidad2'));
const AngulosComplementariosSuplementariosComponent = dynamic(() => import('./suplementarioscomplementarios'));
const AreasFigurasPlanasComponent = dynamic(() => import('./areasplanas'));
const DistanciaDosPuntosComponent = dynamic(() => import('./dospuntos'));
const AreasYComparacionesComponent = dynamic(() => import('./areasycomparaciones'));
const PerimetroComponent = dynamic(() => import('./perimetro'));
const PerimetroAreaAnguloComponent = dynamic(() => import('./paa'));
const PlanoCartesianoPage = dynamic(() => import('./planocartesiano'));
const SemejanzaCongruenciaComponent = dynamic(() => import('./semejanzacongruencia'));
const TriangulosPage = dynamic(() => import('./triangulos'));
const VolumenesPage = dynamic(() => import('./volumenes'));

const topicsMap: { [key: string]: React.ComponentType } = {
  'construccion-de-expresiones-algebraicas': ExpresionesAlgebraicasComponent,
  'ecuaciones-lineales': EcuacionesLinealesComponent,
  'evaluacion-de-funciones': EvaluacionFuncionesComponent,
  'evaluar-una-ecuacion-con-2-variables': FuncDosVariablesComponent,
  'evaluar-una-expresion-algebraica': ExpresionAlgebraicaComponent,
  'sistemas-de-ecuaciones': SistemasEcuacionesComponent,
  'cuadrado-de-una-fraccion': CuadradoFraccionComponent,
  'fracciones': FraccionesComponent,
  'maximo-comun-divisor': MaximoComunDivisorComponent,
  'operaciones-con-fracciones': OperacionesFraccionesComponent,

  'angulo-perigonal-o-perigono': AnguloPerigonalPerigonoComponent,
  'angulos-complementarios-y-suplementarios': AngulosComplementariosSuplementariosComponent,
  'areas-de-figuras-planas': AreasFigurasPlanasComponent,
  'distancia-entre-dos-puntos': DistanciaDosPuntosComponent,
  'ejercicios-de-areas-y-comparaciones': AreasYComparacionesComponent,
  'perimetro': PerimetroComponent,
  'perimetros-areas-y-angulos': PerimetroAreaAnguloComponent,
  'plano-cartesiano': PlanoCartesianoPage,
  'semejanza-y-congruencia': SemejanzaCongruenciaComponent,
  'triangulos': TriangulosPage,
  'volumenes': VolumenesPage,

  'datos-graficados': DatosGraficadosComponent,
  'probabilidad-1': Probabilidad1Component,
  'probabilidad-2': Probabilidad2Component,
};

/**
 * @returns the main subject page that will render the specific topic page.
 * The topic page is dynamically imported based on the last part of the pathname.
 */
const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  const TopicComponent = topicsMap[lastText];

  if (!TopicComponent) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo.</p>;
  }

  return (
    <div className="w-full h-full px-2 text-justify flex flex-col">
      <div className="w-full lg:w-[80%] justify-self-center self-center mb-14">
        <TopicComponent />
      </div>
    </div>
  );
};

export default Page;
