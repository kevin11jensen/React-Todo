import React from 'react';

// import styled from 'styled-components';

import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all'
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        
        if (todo.id === id) {
          //suppose to update
          return {
            id: todo.id,
            text: todo.text,
            //...todo,
            complete: !todo.complete
          }
        } else {
          return todo;
        }

      })
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }



  render() {

    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } 
    else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    }
    else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)} 
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo} 
          />
          ))}
          <div>tasks remaining: {this.state.todos.filter(todo => !todo.complete).length}</div>
          <div>
          <button onClick = {() => this.updateTodoToShow('all')}>all</button>
          <button onClick = {() => this.updateTodoToShow('active')}>active</button>
          <button onClick = {() => this.updateTodoToShow('completed')}>complete</button>
          </div>
      </div>
    )
  }
}

//the reason you only see the text is because we map through the todos and for each todo we create a new div and that div only contains the id which is date.now() and the input text