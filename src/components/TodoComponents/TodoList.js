import React from 'react';

// import styled from 'styled-components';

import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {JSON.stringify(this.state.todos)}
      </div>
    )
  }
}