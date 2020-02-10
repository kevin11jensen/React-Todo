import React, { Component } from 'react';

class ListForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      // [e.target.name]: e.target.value
      newItem: e.target.value
    });

    class ListForm extends Component {
      // Constructor with state
      constructor() {
        super();
        this.state = {
          newItem: ''
        };
      }
    
      handleChanges = e => {
        // update state with each keystroke
        this.setState({
          // [e.target.name]: e.target.value
          newItem: e.target.value
        });
      };
    
      // class property to submit form
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

  // class property to submit form
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
