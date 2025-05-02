// src/components/MathematicsContent.tsx
"use client";

import { useState } from "react";
import React from "react";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import SideBar from "../components/SideBar";
import mathematics from "./mathematics.json";
import { useDarkMode } from "../hooks/useDarkMode";

interface MathematicsContentProps {
  selectedTopicIndex: number;
}

/**
 * 
 * @param selectedTopicIndex the index of the selected topic 
 * @returns the main content of the mathematics page with the selected topic, 
 * obtained from the math sidebar.
 */
const MathematicsContent: React.FC<MathematicsContentProps> = ({
  selectedTopicIndex,
}) => {
  const selectedTopic = mathematics.topics[selectedTopicIndex];

  const [isDarkMode] = useDarkMode();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  
    const closeSidebar = () => {
      setIsSidebarVisible(false);
    };
  

  return (
    <div className="relative w-full">
      {/* Botón de menú solo en pantallas pequeñas */}
      <button
        onClick={toggleSidebar}
        className="w-28 sm:w-auto fixed top-[80px] left-4 z-50 p-2 bg-[var(--menu-button-bg)] text-[var(--text-color)] rounded-2xl md:hidden"
      >
        {isSidebarVisible ? "Cerrar" : "Menú"}
      </button>

      {/* Sidebar */}
      <SideBar
        className="block md:hidden"
        elements={selectedTopic.points.map((s) => s.title)}
        isDarkMode={isDarkMode}
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={closeSidebar}
      />

    <div className="flex flex-col w-full lg:max-w-[1120px] px-2">
      <MainSubjects
        title={mathematics.title}
        description={mathematics.description}
        points={mathematics.points}
        isDarkMode={isDarkMode}
      >
        {selectedTopic ? (
          selectedTopic.points.map((point, pointIndex) => (
            <SubjectCard
              key={pointIndex}
              title={point.title}
              description={point.description}
              isDarkMode={isDarkMode}
              colorToRender={mathematics.color}
            />
          ))
        ) : (
          <p className="text-gray-500 pl-4">Por favor selecciona un tema.</p>
        )}
      </MainSubjects>
    </div>
    </div>
  );
};

export default MathematicsContent;
