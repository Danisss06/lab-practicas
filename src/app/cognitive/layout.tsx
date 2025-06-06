"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import subjects from "./cognitiveSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const cognitiveSubjects = subjects.map((subject) => subject.title);
  const [isDarkMode] = useDarkMode();

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);

  const handleSelectTopic = (index: number) => {
    setSelectedTopicIndex(index);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // Ocultar sidebar automáticamente si cambiamos a escritorio
      if (!mobile) {
        setIsSidebarVisible(false);
      }
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
          {/* Botón de menú solo visible en móvil cuando el menú está cerrado */}
          {isMobile && !isSidebarVisible && (
            <button
              onClick={() => setIsSidebarVisible(true)}
              className="p-2 rounded-2xl transition-colors w-36 border fixed z-50 md:hidden"
              style={{
                left: "2rem",
                top: "88px",
                backgroundColor: "var(--darkmode-btn-bg)",
                color: "var(--darkmode-btn-text)",
                borderColor: "var(--darkmode-btn-border)",
              }}
            >
              Menú
            </button>
          )}

          <SideBar
            elements={cognitiveSubjects}
            isDarkMode={isDarkMode}
            isSidebarVisible={!isMobile || isSidebarVisible}
            selectedTopicIndex={selectedTopicIndex}
            onSelect={handleSelectTopic}
            onCloseSidebar={() => setIsSidebarVisible(false)}
          />

          {React.cloneElement(children as React.ReactElement, {
            selectedTopicIndex,
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
