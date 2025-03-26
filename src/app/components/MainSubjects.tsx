
interface MainSubjectsProps {
  children: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  isDarkMode: boolean;
}

/**
 * @param children gets the children components to render
 * @param title gets the title of the main subjects
 * @param description gets the description of the main subjects
 * @param points gets the points of the main subjects
 * @param isDarkMode gets a boolean to render the component in dark mode
 * @returns a component that renders the main subjects ordered in a grid view only 
 * available for the first click of a subject by the user. After the first click
 * the sidebar becomes the navigation method.
 */
const MainSubjects: React.FC<MainSubjectsProps> = ({children, title, description, points, isDarkMode}) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className={`text-[var(--text-color)] tracking-light text-[32px] font-bold leading-tight min-w-72`}>
          {title}
        </p>
        <p className={`text-[var(--text-color)] text-base font-normal leading-normal`}>
          {description}
          {points.map((point, index) => (
            <span key={index} className="block">{point}</span>
          ))}
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-4 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default MainSubjects;
