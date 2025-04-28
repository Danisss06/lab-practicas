"use client"; 

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * Responsive footer component to display authors and privacy policies.
 * Plus a link to the credits page.
 * 
 * @returns Footer component
 */
const FooterComponent: React.FC = () => {
  const pathname = usePathname();
  const [isDarkMode] = useDarkMode();  
  
  return (
    <footer 
      className="static rounded-none lg:rounded-t-2xl bg-[var(--footer-background)] text-[var(--footer-text)] w-[100%] 
      lg:max-w-[1120px] flex flex-col lg:flex-row justify-between content-center px-4 py-3 gap-4 self-center text-base"
    >
        <div className="flex flex-col text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm font-bold text-[var(--footer-text-1)] sm:self-center lg:self-start">
        <p>
          Se prohíbe la reproducción total o parcial sin previo y expreso
          consentimiento por escrito.
        </p>
        <p>
          D.R.© Instituto Tecnológico y de Estudios Superiores de Monterrey, México, {new Date().getFullYear()}.
        </p>
      </div>
      <div className="flex flex-row gap-6 text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm font-bold text-[var(--footer-text)] sm:self-center lg:self-center">
        <a
          target="_blank"
          href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey"
          className="text-[var(--footer-text)] hover:text-[var(--primary)]"
        >
          Políticas de Privacidad
        </a>
        <span className="border-r-2 border-[var(--line-color)]"></span>
        <a
          target="_blank"
          href="https://tec.mx/es/aviso-privacidad-centro-virtual-aprendizaje"
          className="text-[var(--footer-text)] hover:text-[var(--primary)]"
        >
          Aviso de Privacidad
        </a>
        <span className="border-r-2 border-[var(--line-color)]"></span>
        <Link
          href="/credits"
          className="text-[var(--footer-text)] hover:text-[var(--primary)]"
        >
          Créditos
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;