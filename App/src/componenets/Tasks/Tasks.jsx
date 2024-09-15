import NewTask from "../NewTask/NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
                TASKS
            </h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p className="text-stone-800 my-4"></p>}
            {tasks.length > 0 && <ul className="p-4 rounded-md bg-stone-100">
                                    {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
                                                            <span>{task.text}</span>
                                                            <button className="text-stone-700 hover:text-red-500">Clear Task</button>
                                                        </li>)}
                                </ul>}
        </section>
    );
}