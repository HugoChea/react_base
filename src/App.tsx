// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  // useState = hook qui trigger le rendering de la variable pour la mettre à jour via setTodos
  const [todos, setTodos] = useState<Todo[]>([]);

  // fonction qui add un objet Todo dans todos
  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime(),
        text,
      },
    ]);
  };

  // fonction qui remove un objet par son id de todos
  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      { /* TodoForm renvoit la valeur que l'user a saisit via le props onAddTodo */}
      <TodoForm onAddTodo={addTodo} />
      { /* TodoList reçoit la liste todos et renvoit l'id que l'user supprimer via le props onRemoveTodo */}
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default App;
