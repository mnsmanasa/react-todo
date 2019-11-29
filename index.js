import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TodoAppList from './components/TodoAppList';
import CreateTodo from './components/CreateTodo';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h3>Todo App</h3>
        <CreateTodo />
        <TodoAppList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
