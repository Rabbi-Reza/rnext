import AddTask from "../ui/todos/AddTask";
import Search from "../ui/todos/Search";
import TodoList from "../ui/todos/TodoList";

export const getAllTodos = async (query) => {
    const res = await fetch(`http://localhost:3001/tasks`);
    const todos = await res.json();
    const finalTODOs = query
        ? todos.filter((todo) =>
              todo?.text?.toLowerCase().includes(query.toLowerCase())
          )
        : todos;
    return finalTODOs;
};

export default async function Todos({ searchParams: { query } }) {
    const tasks = await getAllTodos(query);

    return (
        <main className="max-w-4xl mx-auto mt-4">
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">My Todos</h1>
                <AddTask />
            </div>
            <div className="text-center border-t border-gray-400 flex flex-col gap-4 p-6">
                <Search />
                <TodoList tasks={tasks} />
            </div>
        </main>
    );
}
