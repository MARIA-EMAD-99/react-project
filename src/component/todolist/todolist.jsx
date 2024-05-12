import { useState } from "react";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
console.log(todos)
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput !== "") {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container my-5">
        <label htmlFor="inputPassword5" className="form-label">Todo list</label>
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <button className="btn btn-success my-4" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
            <button className="btn btn-danger" onClick={() => handleDeleteTodo(index)}>Delete</button>
            {!todo.completed && (
              <button className="btn btn-success" onClick={() => handleCompleteTodo(index)}>Complete</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
