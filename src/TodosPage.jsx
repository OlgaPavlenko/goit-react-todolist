import { useState } from "react";
import TodosInputForm from "./TodosInputForm";
import TodosList from "./TodosList";


const TodosPage = () => {  
const [todos, setTodos] = useState([]);

    const handleSubmit = (todo) => {
        if (todos.find(({ value }) => value === todo.value)) {return alert('already excist');};
setTodos((prevState) => [todo, ...prevState]);
    };

const handleDeleteTodo = (id) => setTodos(prevState => prevState.filter(todo => todo.id !== id));
const handleToggleTodo = (id) => {
    setTodos(prevState => prevState.map(todo => todo.id === id ? {
        ...todo,
        isDone: !todo.isDone
    } : todo));
};

    return (
        <div>
        <h1>Todos</h1>

        <TodosInputForm onSubmit={handleSubmit}/>
        <TodosList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo}/>
    </div>
    )
};

export default TodosPage;