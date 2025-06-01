"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MathSideBar from "../components/MathSideBar";
import subjects from "./mathematics.json";
import { useDarkMode } from "../hooks/useDarkMode";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [isDarkMode] = useDarkMode();

  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSelectTopic = (index: number) => {
    setSelectedTopicIndex(index);
  };

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

        <div className="flex flex-row gap-4 w-full self-center px-2 mb-16">
          <MathSideBar
            elements={subjects.topics}
            selectedTopicIndex={selectedTopicIndex}
            isDarkMode={isDarkMode}
            onSelect={handleSelectTopic}
            isSidebarVisible={!isMobile || isSidebarVisible}
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

