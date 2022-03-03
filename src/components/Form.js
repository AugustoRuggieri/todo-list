import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
    const handleInputText = (e) => {
        setInputText(e.target.value);
    }
    const handleSubmitButton = (e) => {
        e.preventDefault();
        if(inputText === "") {
            alert("You need to write something before you submit")
        } else {
            setTodos([
                ...todos,
                {text: inputText,
                 completed: false,
                 id: Math.floor(Math.random() * 1000)   
                }
            ]);
            setInputText("");
        }
    }
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={handleInputText} />
            <button onClick={handleSubmitButton} className="todo-btn">
                <i class="fa-solid fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={handleStatus} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )

}

export default Form;