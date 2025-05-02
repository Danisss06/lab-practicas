"use client";

import { useState } from "react";
import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import SideBar from "../components/SideBar";
import verbal from "./verbal.json";
import subjects from "./verbalSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * It will be the landing navigation to subjects option for users to choose
 * a topic to study, after choosing a topic, the user will be redirected to
 * the topic page. But for further navigation, the user will have to use the 
 * sidebar, set in the verbal layout.
 * 
 * @returns a component with the main subjects of the verbal page
 */
const VerbalPage = () => {
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
        elements={subjects.map((s) => s.title)}
        isDarkMode={isDarkMode}
        isSidebarVisible={isSidebarVisible}
        onCloseSidebar={closeSidebar}
      />

    <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-14">
      <MainSubjects
        title={verbal.title}
        description={verbal.description}
        points={verbal.points}
        isDarkMode={isDarkMode}
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            isDarkMode={isDarkMode}
            colorToRender={verbal.color}
          />
        ))}
      </MainSubjects>
    </div>
    </div>
  );
};

export default VerbalPage;
