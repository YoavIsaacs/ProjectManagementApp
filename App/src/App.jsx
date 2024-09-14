import { useState } from "react";

import NewProject from "./componenets/NewProject/NewProject";
import NoProjectSelected from "./componenets/NoProjectSelected/NoProjectSelected";
import Sidebar from "./componenets/Sidebar/Sidebar";
import SelectedProject from "./componenets/SelectedProject/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  });


  function handleSelectProject(id) {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectID: id
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectID: null
      };
    });
  }

  function handleCancelProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectID: undefined
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

  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects: prev.projects.filter((project) => project.id !== prev.selectedProjectID)
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectID);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddingProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectState.projects} onStartAddingProject={handleStartAddProject} onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
