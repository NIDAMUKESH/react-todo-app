import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            text={todo.text}
            completed={todo.completed}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
      <div className="todo-actions">
        <p>{remainingTodos} items left</p>
        <button onClick={clearCompleted} className="clear-button">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
