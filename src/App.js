import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilter(todos);
        break;
    }
  }

  useEffect(() => {
    getTodosFromLocal();
  }, [])

  useEffect(() => {
    handleFilter();
    saveTodosToLocal();
  }, [todos, status])

  const saveTodosToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getTodosFromLocal = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Your personal todo list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App;
