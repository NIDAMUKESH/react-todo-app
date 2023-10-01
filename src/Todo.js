import React from 'react';

const Todo = ({ text, index, completed, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-text" onClick={() => onToggle(index)}>
        {text}
      </div>
      <button onClick={() => onDelete(index)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default Todo;
