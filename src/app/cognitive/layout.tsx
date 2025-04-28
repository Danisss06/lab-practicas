"use client";

import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import subjects from "./cognitiveSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * Custom layout for the cognitive page
 * 
 * @param param0 children component to render the subjects and the content of them
 * @returns a layout with a navbar, sidebar and footer, which will be visible 
 * for quizes, topics content, and topics navigation
 */

const Layout = ({ children }: { children: React.ReactNode }) => {
  const cognitiveSubjects = subjects.map((subject) => subject.title);

  const [isDarkMode] = useDarkMode();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2">
          <SideBar elements={cognitiveSubjects} isDarkMode={isDarkMode} />
          <main className="flex-1">{children}</main> {/* Asegurando que el contenido ocupe el espacio disponible */}
        </div>
      </div>
    </div>
  );
};

export default Layout;

