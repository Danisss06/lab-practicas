interface MainSubjectsProps {
  children: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  isDarkMode: boolean;
}

/**
 * Renders main subjects with support for underlined text via HTML.
 */
const MainSubjects: React.FC<MainSubjectsProps> = ({ children, title, description, points, isDarkMode }) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p
          className={`text-[var(--text-color)] tracking-light text-[32px] font-bold leading-tight min-w-72`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="text-[var(--text-color)] text-base font-normal leading-normal">
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {points.map((point, index) => (
            <span key={index} className="block" dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-4 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default MainSubjects;
