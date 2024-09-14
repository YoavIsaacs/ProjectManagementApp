import Button from "../Button/Button";

export default function Sidebar({ projects, onStartAddingProject, onSelectProject, selectedProjectID }) {

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div className="mt-8">
                <Button onClick={onStartAddingProject}>+ Add Project</Button>
                <ul>
                    {projects.map(project => {
                        let stylingClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                        if (project.id === selectedProjectID) {
                            stylingClasses += " bg-stone-800 text-stone-200"
                        } else {
                            stylingClasses += " text-stone-400"
                        }

                        return (<li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)}
                                className={stylingClasses}>{project.title}</button>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}