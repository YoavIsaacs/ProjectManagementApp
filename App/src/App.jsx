import Sidebar from "./componenets/Sidebar/Sidebar";

function App() {

  const tempProjects = [
    {
      title: "hello"
    },
    {
      title: "world"
    }
  ]

  return (
    <>
      <Sidebar projects={tempProjects}/>
    </>
  );
}

export default App;
