// src/TodoList.tsx
import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
