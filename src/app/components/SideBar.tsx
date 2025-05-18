"use client";

import { useState, useEffect, useRef } from "react";
import GoBackBtn from "./GoBackBtn";
import Link from "next/link";
import { normalizeTitle } from "../utils/utils";
import { usePathname } from "next/navigation";

interface SideBarProps {
  elements: string[];
  isDarkMode: boolean;
  onSelect?: (index: number) => void;
  isSidebarVisible: boolean;
  onCloseSidebar?: () => void;
  className?: string;
  selectedTopicIndex?: number;
}

const SideBar: React.FC<SideBarProps> = ({
  elements,
  isDarkMode,
  onSelect,
  isSidebarVisible,
  onCloseSidebar,
  className,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const pathToNavigate = pathname.includes("cognitive")
    ? "cognitive"
    : pathname.includes("verbal")
    ? "verbal"
    : "cognitive";

  const handleSelected = (index: number) => {
    setSelected(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  // Detect click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onCloseSidebar?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible, onCloseSidebar]);

  return (
    <>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--sidebar-bg)] p-2 rounded-r-2xl md:rounded-2xl shadow-xl z-40 transition-transform duration-300 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 layout-content-container flex flex-col min-w-80 ${className ?? ""}`}
      >
        {isSidebarVisible && (
          <button
            onClick={onCloseSidebar}
            className="absolute top-4 right-4 z-50 hover:opacity-80 md:hidden"
            aria-label="Cerrar menú"
          >
            <div
              className="w-6 h-6 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "var(--close-icon)" }}
            ></div>
          </button>
        )}

        <div className="mt-20 md:mt-0 flex h-full flex-col justify-between p-2">
          <div className="flex flex-col gap-4">
            <GoBackBtn isDarkMode={isDarkMode} />
            <div className="flex flex-col gap-2">
              {elements.map((element, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                    selected === index
                      ? "bg-[var(--sidebar-selected-bg)]"
                      : "bg-[var(--sidebar-element-bg)]"
                  } text-[var(--sidebar-text)]`}
                  onClick={() => handleSelected(index)}
                >
                  <div className="w-6 h-6 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "var(--fa-minus-icon)" }}></div>
                  <Link
                    href={`/${
                      pathname.includes(`${pathToNavigate}/`)
                        ? pathname.slice(
                            0,
                            pathname.indexOf(`${pathToNavigate}/`) +
                              `${pathToNavigate}/`.length
                          )
                        : `${pathToNavigate}/`
                    }${normalizeTitle(element)}`}
                    className="w-full"
                    onClick={onCloseSidebar}
                  >
                    <p className="w-full text-[var(--sidebar-text)] text-base font-medium leading-normal">
                      {element}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
