"use client";

import Footer from '../components/Footer'
import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import subjects from "./verbalSubjects.json"
import { useDarkMode } from '../hooks/useDarkMode'

/**
 * @returns a layout with a navbar, sidebar, children and a footer.
 */
const layout = ({ children }: { children: React.ReactNode }) => { 
  const verbalSubjects = subjects.map((subject) => subject.title)

  const [isDarkMode] = useDarkMode()

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-16">
          <SideBar elements={verbalSubjects} isDarkMode={isDarkMode} />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default layout