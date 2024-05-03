/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Count from './Count';
import Todo from './Todo';
import { getNextKey } from '../util';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { key: 0, text: 'Just some demo tasks' },
        { key: 1, text: 'As an example' },
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        key: getNextKey(state.todos),
        text: state.inputVal,
      }),
      inputVal: '',
    }));
  }

  handleTodoChange(key, newValue) {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.key === key) return { ...todo, text: newValue };
        else return todo;
      }),
    });
  }

  handleDelete(key) {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.key !== key),
    });
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.key}
              value={todo.text}
              onChange={(newValue) => this.handleTodoChange(todo.key, newValue)}
              onDelete={() => this.handleDelete(todo.key)}
            />
          ))}
        </ul>
        <Count value={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
