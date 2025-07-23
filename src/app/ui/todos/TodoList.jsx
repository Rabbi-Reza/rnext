const TodoList = ({ tasks }) => {
    return (
        <ul className="text-2xl m-2 list-decimal">
            {tasks.map((task) => (
                <li className="pb-1.5 text-left" key={task.id}>
                    {task.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
