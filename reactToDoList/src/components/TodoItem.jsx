import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <span>{todo.text}</span>
      <button onClick={deleteTodo} className="delete-btn">
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
