// src/TodoForm.tsx
import React, { useState } from 'react';
import './App.css';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo(inputText);
    setInputText('');
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button className="red" onClick={handleAddTodo}>Add Todo</button>

    </div>
  );
};

export default TodoForm;
