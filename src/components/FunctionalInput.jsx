import React, { useState } from 'react';
import TodoFunctional from './TodoFunctional';
import Count from './Count';
import { getNextKey } from '../util';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState([
    { key: 0, text: 'Just some demo tasks' },
    { key: 1, text: 'As an example' },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, { key: getNextKey(todos), text: inputVal }]);
    setInputVal('');
  };

  const handleTodoChange = (key, newValue) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) return { ...todo, text: newValue };
        else return todo;
      }),
    );
  };

  const handleDelete = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          <TodoFunctional
            key={todo.key}
            value={todo.text}
            onChange={(newValue) => handleTodoChange(todo.key, newValue)}
            onDelete={() => handleDelete(todo.key)}
          />
        ))}
      </ul>
      <Count value={todos.length} />
    </section>
  );
};

export default FunctionalInput;
