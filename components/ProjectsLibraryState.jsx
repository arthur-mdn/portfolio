import { createContext, useContext, useState } from "react";

const ProjectsLibraryContext = createContext(null);

export function ProjectsLibraryProvider({ children }) {
  // The app stays mounted between routes; a full reload starts closed again.
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const [category, setCategory] = useState("all");

  return (
    <ProjectsLibraryContext.Provider value={{ otherProjectsOpen, setOtherProjectsOpen, category, setCategory }}>
      {children}
    </ProjectsLibraryContext.Provider>
  );
}

export function useProjectsLibraryState() {
  return useContext(ProjectsLibraryContext);
}
