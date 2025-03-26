"use client";

// Page.tsx
import React from 'react';
import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';

const ClasesDeOracionComponent = dynamic(() => import('./clasesoracion'));
const CoordinantesOSubordinantesComponent = dynamic(() => import('./coordysub'));
const ElUsoDelGerundioComponent = dynamic(() => import('./gerundio'));
const LecturasComponent = dynamic(() => import('./lecturas'));
const LosElementosComunesDeLaOracionComponent = dynamic(() => import('./elecomunesoracion'));
const OrtografiaComponent = dynamic(() => import('./ortografia'));
const SignificadoDeUnaOracionComponent = dynamic(() => import('./significadooracion'));
const UsoDeLasPalabrasEnlazantesComponent = dynamic(() => import('./palabrasenlazantes'));
const UsoDeLasPreposicionesComponent = dynamic(() => import('./usopreposiciones'));

/* 
import ClasesDeOracionComponent from "./clasesoracion";
import CoordinantesOSubordinantesComponent from "./coordysub";
import ElUsoDelGerundioComponent from "./gerundio";
import LecturasComponent from "./lecturas";
import LosElementosComunesDeLaOracionComponent from "./elecomunesoracion";
import OrtografiaComponent from "./ortografia";
import SignificadoDeUnaOracionComponent from "./significadooracion";
import UsoDeLasPalabrasEnlazantesComponent from "./palabrasenlazantes";
import UsoDeLasPreposicionesComponent from "./usopreposiciones"; */

const topicsMap: { [key: string]: React.ComponentType } = {
  'clases-de-oracion': ClasesDeOracionComponent,
  'coordinantes-o-subordinantes': CoordinantesOSubordinantesComponent,
  'el-uso-del-gerundio': ElUsoDelGerundioComponent,
  lecturas: LecturasComponent,
  'los-elementos-comunes-de-la-oracion': LosElementosComunesDeLaOracionComponent,
  ortografia: OrtografiaComponent,
  'significado-de-una-oracion': SignificadoDeUnaOracionComponent,
  'uso-de-las-palabras-enlazantes': UsoDeLasPalabrasEnlazantesComponent,
  'uso-de-las-preposiciones': UsoDeLasPreposicionesComponent
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
