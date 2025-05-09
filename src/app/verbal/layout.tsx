"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import subjects from "./verbalSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * @returns a layout with a navbar, sidebar, children and a footer.
 */
const layout = ({ children }: { children: React.ReactNode }) => {
  const verbalSubjects = subjects.map((subject) => subject.title);
  const [isDarkMode] = useDarkMode();

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-16">
          <SideBar
            elements={verbalSubjects}
            isDarkMode={isDarkMode}
            isSidebarVisible={!isMobile || isSidebarVisible}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;