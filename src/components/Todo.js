const Todo = ({text, todo, todos, setTodos}) => {

    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const handleCompleted = () => {
        setTodos(todos.map((el) => {
            if(el.id === todo.id) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="check-btn" onClick={handleCompleted}><i class="fa-solid fa-check"></i></button>
            <button className="delete-btn" onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default Todo;