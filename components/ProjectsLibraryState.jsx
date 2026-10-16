import { createContext, useContext, useState } from "react";

const ProjectsLibraryContext = createContext(null);

export function ProjectsLibraryProvider({ children }) {
  // The app stays mounted between routes; a full reload starts closed again.
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  return (
    <ProjectsLibraryContext.Provider value={{ otherProjectsOpen, setOtherProjectsOpen }}>
      {children}
    </ProjectsLibraryContext.Provider>
  );
}

export function useProjectsLibraryState() {
  return useContext(ProjectsLibraryContext);
}
