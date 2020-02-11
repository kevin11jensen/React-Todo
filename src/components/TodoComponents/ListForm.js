import React, { Component } from 'react';

class ListForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    });

    class ListForm extends Component {
      constructor() {
        super();
        this.state = {
          newItem: ''
        };
      }
    
      handleChanges = e => {
        this.setState({
          newItem: e.target.value
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({ newItem: '' });
      };
    
      render() {
        console.log('rendering form');
        return (
          <form onSubmit={this.handleSubmit}>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
              type="text"
              name="newItem"
              value={this.state.newItem}
              onChange={this.handleChanges}
            />
            <button>Add Task</button>
          </form>
        );
      }
    }
    
    
    
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default ListForm;
