"use client";

import { useRouter } from "next/navigation";
import { addTodo } from "../../actions/todo-actions";
const AddTask = () => {
    const router = useRouter();

    const addTodoItem = (formData) => {
        addTodo(formData);
        router.refresh();
    };

    return (
        <form action={addTodoItem}>
            <div>
                <label htmlFor="task"></label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    placeholder="Add a task"
                    className="rounded px-2 py-1 placeholder:text-gray-300"
                />
            </div>
            <div className="p-4">
                <button
                    className="bg-blue-500 text-white px-2 py-1 text-md rounded"
                    type="submit"
                >
                    Add a Task
                </button>
            </div>
        </form>
    );
};

export default AddTask;
