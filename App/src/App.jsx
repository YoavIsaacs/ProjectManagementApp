import { useState } from "react";

import NewProject from "./componenets/NewProject/NewProject";
import NoProjectSelected from "./componenets/NoProjectSelected/NoProjectSelected";
import Sidebar from "./componenets/Sidebar/Sidebar";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  });


  function handleStartAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectID: null
      };
    });
  }
  

  function handleAddProject(projectData) {
    setProjectState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prev,
        selectedProjectID: undefined,
        projects: [...prev.projects, newProject]
      };
    });
  }


  let content;

if (projectState.selectedProjectID === null) {
  content = <NewProject onAdd={handleAddProject}/>
} else if (projectState.selectedProjectID === undefined) {
  content = <NoProjectSelected onStartAddingProject={handleStartAddProject}/>
}


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectState.projects} onStartAddingProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
