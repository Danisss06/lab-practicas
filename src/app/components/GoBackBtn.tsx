"use client";

import { usePathname } from "next/navigation";

interface GoBackBtnProps {
  isDarkMode: boolean;
  color?: string;
}

/**
 * @param isDarkMode gets a boolean to render the button in dark mode
 * or light mode
 * @returns a button that redirects to the home page when clicked
 * 
 * @description despite the current path the button will always 
 * redirect to the home page.
 */
const GoBackBtn: React.FC<GoBackBtnProps> = ({ isDarkMode }) => {
  const pathname = usePathname();

  // Determine the background color based on the pathname
  const backgroundColor = pathname.includes('cognitive')
    ? 'hover:bg-[#bde2b9]'
    : pathname.includes('verbal')
      ? 'hover:bg-[#ff7e82]'
      : pathname.includes('math')
        ? 'hover:bg-[#afdceb]'
        : 'hover:bg-gray-500';

  return (
    /* From Uiverse.io by AKAspidey01 */
    <button
      className={`w-full bg-[var(--goback-btn-bg)] text-[var(--goback-btn-text)] text-center rounded-2xl h-14 relative text-2xl font-semibold group`}
      type="button"
      onClick={() => window.location.href = "/"}
    >
      <div
        className={`bg-slate-300 ${backgroundColor} rounded-xl h-12 w-1/4 flex items-center justify-center absolute top-[4px] group-hover:w-full z-10 duration-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="25px"
          width="25px"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M3 10l9-7 9 7" />
          <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
        </svg>

      </div>
      <p className="translate-x-2">Volver</p>
    </button>
  );
};

export default GoBackBtn;
