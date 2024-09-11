import NewProject from "./componenets/NewProject/NewProject";
import NoProjectSelected from "./componenets/NoProjectSelected/NoProjectSelected";
import Sidebar from "./componenets/Sidebar/Sidebar";

function App() {

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
