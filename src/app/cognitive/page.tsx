"use client";

import MainSubjects from "../components/MainSubjects";
import SubjectCard from "../components/SubjectCard";
import cognitive from "./cognitive.json";
import subjects from "./cognitiveSubjects.json";
import { useDarkMode } from "../hooks/useDarkMode";

/**
 * It will be the landing navigation to subjects option for users to choose
 * a topic to study, after choosing a topic, the user will be redirected to
 * the topic page. But for further navigation, the user will have to use the 
 * sidebar, set in the cognitive layout.
 * 
 * @returns a component with the main subjects of the cognitive page
 */

const CognitivePage = () => {
  const [isDarkMode] = useDarkMode();

  return (
    <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-14">
      <MainSubjects
        title={cognitive.title}
        description={cognitive.description}
        points={cognitive.points}
        isDarkMode={isDarkMode}
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            isDarkMode={isDarkMode}
            colorToRender={cognitive.color}
          />
        ))}
      </MainSubjects>
    </div>
  );
};

export default CognitivePage;
