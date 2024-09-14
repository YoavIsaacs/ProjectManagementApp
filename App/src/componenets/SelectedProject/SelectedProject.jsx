import Button from "../Button/Button";



export default function SelectedProject({project}) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    return (
        <div className="w-[35] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
                    <Button className="text-stone-600 hover:text-stone-950">Delete</Button>
                </div>
                <p className="mb-4 text-stone-400'">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
        </div>
    );
}