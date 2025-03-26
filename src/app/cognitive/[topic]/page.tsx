"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const AnalogiaComponent = dynamic(() => import("./analogia"));
const Diagramas1Component = dynamic(() => import("./diagramas1"));
const Diagramas2Component = dynamic(() => import("./diagramas2"));
const MetaforasYAnalogiasComponent = dynamic(() => import("./metaforasyanalogias"));
const RazonamientoCondicionalComponent = dynamic(() => import("./razcondicional"));
const RazonamientoPracticoComponent = dynamic(() => import("./razpractico"));
const SecuenciasYMatricesComponent = dynamic(() => import("./secuenciasymatrices"));
const SignificadoDeMetaforasComponent = dynamic(() => import("./significadometaforas"));
const TransformacionesLogicasComponent = dynamic(() => import("./transformacioneslogicas"));
/* 
import Diagramas1Component from './diagramas1';
import Diagramas2Component from "./diagramas2";
import MetaforasYAnalogiasComponent from "./metaforasyanalogias";
import RazonamientoCondicionalComponent from "./razcondicional";
import RazonamientoPracticoComponent from "./razpractico";
import SecuenciasYMatricesComponent from "./secuenciasymatrices";
import SignificadoDeMetaforasComponent from "./significadometaforas";
import TransformacionesLogicasComponent from "./transformacioneslogicas";
 */
const topicsMap: { [key: string]: React.ComponentType } = {
  analogia: AnalogiaComponent,
  'diagramas-1': Diagramas1Component,
  'diagramas-2': Diagramas2Component,
  'metaforas-y-analogias': MetaforasYAnalogiasComponent,
  'razonamiento-condicional': RazonamientoCondicionalComponent,
  'razonamiento-practico': RazonamientoPracticoComponent,
  'secuencias-y-matrices': SecuenciasYMatricesComponent,
  'significado-de-metaforas': SignificadoDeMetaforasComponent,
  'transformaciones-logicas': TransformacionesLogicasComponent
};

/**
 * @returns a component with the page corresponding to the topic 
 * selected by the user. The component is obtained from the last
 * part of the pathname by mapping it to the corresponding component.
 */
const Page: React.FC = () => {
  const pathname = usePathname();
  const lastText = pathname.substring(pathname.lastIndexOf("/") + 1);

  const TopicComponent = topicsMap[lastText];

  if (!TopicComponent) {
    return <p>Tema no encontrado. Puede encontrarse en desarrollo</p>;
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
