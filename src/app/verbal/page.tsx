"use client";

import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
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

  return (
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
  );
};

export default VerbalPage;
