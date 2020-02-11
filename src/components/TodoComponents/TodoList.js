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
        {this.state.todos.map(todo => (<div key={todo.id}>{todo.text}</div>))}
      </div>
    )
  }
}

//the reason you only see the text is because we map through the todos and for each todo we create a new div and that div only contains the id which is date.now() and the input text