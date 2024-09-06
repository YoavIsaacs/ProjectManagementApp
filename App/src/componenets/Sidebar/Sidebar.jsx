export default function Sidebar({ projects }) {

    return (
        <div className="bg-slate-950 w-1/4 fixed top-0 min-h-screen left-0 rounded-tr-3xl">
            <h1 className="text-slate-400 font-bold text-2xl text-left ml-6 mt-10">YOUR PROJECTS</h1>
            <button className="text-slate-600 bg-neutral-800 rounded font-bold m-6 text-xl px-3 py-3 hover:bg-neutral-900">+ Add Project</button>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}><button className="ml-6 font-bold text-xl text-slate-400 bg-slate-900 hover:bg-slate-800 px-4 py-2 mb-3 w-3/4 break-words text-left">{project.title}</button></li>
                ))}
            </ul>
        </div>
    );
}