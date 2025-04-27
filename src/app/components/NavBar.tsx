"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TECLogo from '/public/images/logo_tec.png';
import CVALogo from '/public/images/logo_cva.png';
import DarkModeToggle from "./DarkModeToggle";

interface NavBarProps {
  title?: string;
}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const pathname = usePathname();
  const imageAlign =
    pathname === "/" || pathname === "/credits" ? "items-center" : "items-end";

  return (
    <header className={`flex flex-col md:flex-row ${imageAlign} md:items-center justify-between content-between whitespace-nowrap border-solid border-b-[#abb0b5] px-5 py-3 self-center`}>
  
      {/* MODO RESPONSIVO (MÓVIL) */}
      <div className="flex flex-col md:hidden w-full items-center gap-4">
        {/* Logos juntos */}
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <Link href="https://tec.mx/es" target="_blank" rel="noopener noreferrer">
            <Image
              src={TECLogo}
              alt="Tecnológico de Monterrey"
              width={250}
              height={50}
              className="w-40 sm:w-60"
            />
          </Link>

          <Link href="https://www.centroscomunitariosdeaprendizaje.org.mx/" target="_blank" rel="noopener noreferrer">
            <Image
              src={CVALogo}
              alt="Centro Virtual de Aprendizaje"
              width={250}
              height={50}
              className="w-40 sm:w-60"
            />
          </Link>
        </div>

        {/* Botón Dark Mode debajo */}
        <div className="flex justify-center mt-4 w-full">
          <DarkModeToggle />
        </div>
      </div>

      {/* MODO md+ (TABLET Y DESKTOP) */}
      <div className="hidden md:flex flex-row w-full items-center justify-between gap-4">
        {/* Logo TEC solo a la izquierda */}
        <div className="flex items-center">
          <Link href="https://tec.mx/es" target="_blank" rel="noopener noreferrer">
            <Image
              src={TECLogo}
              alt="Tecnológico de Monterrey"
              width={250}
              height={50}
              className="w-40 sm:w-60"
            />
          </Link>
        </div>

        {/* Logo CVA + Botón juntos a la derecha */}
        <div className="flex items-center gap-24">
          <Link href="https://www.centroscomunitariosdeaprendizaje.org.mx/" target="_blank" rel="noopener noreferrer">
            <Image
              src={CVALogo}
              alt="Centro Virtual de Aprendizaje"
              width={250}
              height={50}
              className="w-40 sm:w-60"
            />
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>


  );
};

export default NavBar;
