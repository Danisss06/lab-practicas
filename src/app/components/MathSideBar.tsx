"use client";

import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Link from "next/link";
import { normalizeTitle } from "../utils/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SubTopic {
  title: string;
  description: string;
}

interface Topic {
  title: string;
  description: string;
  points: SubTopic[];
}

interface SideBarProps {
  elements: Topic[];
  selectedTopicIndex: number;
  isDarkMode: boolean;
  onSelect?: (index: number) => void;
  isSidebarVisible: boolean;
  onCloseSidebar?: () => void;
}

const MathSideBar: React.FC<SideBarProps> = ({
  elements,
  selectedTopicIndex,
  isDarkMode,
  onSelect,
  isSidebarVisible,
  onCloseSidebar,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const pathname = usePathname();

  const handleSelected = (index: number) => {
    setSelected(index === selected ? null : index);
    if (onSelect) onSelect(index);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[var(--sidebar-bg)] p-2 rounded-r-2xl md:rounded-2xl shadow-xl z-40 transition-transform duration-300 transform ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 layout-content-container flex flex-col min-w-80`}
    >
      {/* Close icon (mobile only) */}
      <div
        className="absolute top-6 right-4 md:hidden cursor-pointer"
        onClick={onCloseSidebar}
      >
        <div
          className="w-6 h-6 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "var(--close-icon)" }}
        ></div>
      </div>


      <div className="mt-20 md:mt-0 flex h-full flex-col justify-between p-2">
        <div className="flex flex-col gap-4">
          <GoBackBtn isDarkMode={isDarkMode} />
          <div className="flex flex-col gap-2">
            {elements.map((element, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                    selected === index
                      ? "bg-[var(--sidebar-selected-bg)]"
                      : "bg-[var(--sidebar-element-bg)]"
                  } text-[var(--sidebar-text)]`}
                  onClick={() => handleSelected(index)}
                >
                  <div className="w-6 h-6 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "var(--fa-minus-icon)" }} />
                  <p className="w-full text-[var(--sidebar-text)] text-base font-medium leading-normal">
                    {element.title}
                  </p>
                </div>

                {selected === index && (
                  <div className="ml-8 mt-2 flex flex-col gap-1">
                    {element.points.map((point, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`${
                          pathname.includes("mathematics/")
                            ? pathname.slice(
                                0,
                                pathname.indexOf("mathematics/") +
                                  "mathematics/".length
                              )
                            : "/mathematics/"
                        }${normalizeTitle(point.title)}`}
                        onClick={onCloseSidebar}
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--sidebar-element-bg)]"
                      >
                        <div
                          className="w-4 h-4 bg-no-repeat bg-center bg-contain"
                          style={{
                            backgroundImage: "var(--fa-minus-icon)",
                          }}
                        ></div>
                        <p className="text-[var(--sidebar-text)] text-sm">
                          {point.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathSideBar;
