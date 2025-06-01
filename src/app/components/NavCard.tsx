"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import BrainIcon from "/public/icons/faBrain.svg";
import BookIcon from "/public/icons/faBook.svg";
import CalculatorIcon from "/public/icons/faCalculator.svg";
import { useDarkMode } from "../hooks/useDarkMode";

export interface NavCardProps {
  num: number;
  title: string;
  description: string;
  path: string;
  icon: number;
}

const iconMap: { [key: string]: StaticImageData } = {
  "fa-solid fa-brain": BrainIcon,
  "fa-solid fa-book": BookIcon,
  "fa-solid fa-calculator": CalculatorIcon,
};

/**
 * @param num gets the number of the card
 * @param title gets the title of the card
 * @param description gets the description of the card
 * @param path gets the path to redirect when the button is clicked
 * @param icon gets the icon of the card
 * @returns a card component that renders the title, description, and a button to redirect to the path
 * of the three main subjects of the website.
 */
const NavCard: React.FC<NavCardProps> = ({
  num,
  title,
  description,
  path,
  icon,
}) => {
  const [isDarkMode] = useDarkMode();

  const iconImage = iconMap[icon];

  return (
    <>
      <div
        className={`
      hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl
      sm:w-[90%] lg:grow /* md:w-80 */ shadow-[0px_0px_15px_rgba(0,0,0,0.2)] p-9 space-y-3 relative overflow-hidden flex flex-col justify-between content-start bg-[var(--navcard-background)] text-[var(--navcard-text)
      `}
      >
        <div
          className={`w-24 h-24 rounded-full absolute -right-5 -top-7 ${num === 1
              ? "bg-light_green"
              : num === 2
                ? "bg-kinda_red"
                : "bg-indigo_blue"
            }`}
        >
          <p className="absolute bottom-5 left-9 text-white text-2xl font-bold">{num}</p>
        </div>
        <div className="">
          <div className="h-[42px] fill-violet-500 w-12">
            <Image
              src={iconImage}
              alt={`${title} icon`}
              width={42}
              height={42}
            />
          </div>
          <h1 className="font-bold text-xl pt-3 mt-2">{title}</h1>
        </div>
        <p className="h-full text-base leading-6 flex flex-col justify-start text-[var(--navcard-text)]">
          {description}
        </p>

        <a
          href={path}
          className="text-white text-sm font-bold rounded-2xl bg-slate-500 px-3 py-2 w-24 text-center"
        >
          <button>Aprender</button>
        </a>
      </div>
    </>
  );
};

export default NavCard;
