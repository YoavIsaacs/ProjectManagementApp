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
  let content;

if (projectState.selectedProjectID === null) {
  content = <NewProject />
} else if (projectState.selectedProjectID === undefined) {
  content = <NoProjectSelected onStartAddingProject={handleStartAddProject}/>
}



  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddingProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
