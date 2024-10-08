import { useState } from "react";

import NewProject from "./componenets/NewProject/NewProject";
import NoProjectSelected from "./componenets/NoProjectSelected/NoProjectSelected";
import Sidebar from "./componenets/Sidebar/Sidebar";
import SelectedProject from "./componenets/SelectedProject/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(taskText) {

    setProjectState((prev) => {

      const taskId = Math.random();
      const newTask = {
        text: taskText,
        projectId: prev.selectedProjectID,
        id: taskId
      }

      return {
        ...prev,
        tasks: [...prev.tasks, newTask]
      };
    });


  }

  function handleDeleteTask(id) {

    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id)
      };
    });
  }


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

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks} />;

  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddingProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectState.projects} onStartAddingProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProjectID={projectState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
