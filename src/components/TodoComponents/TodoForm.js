import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 99%;
  height: 15vh;
  font-size: 3rem;
`
export default class TodoForm extends React.Component {

  state = {
    text: '' //store the text the user typed here
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit({
          id: Date.now(),
          text: this.state.text,
          complete: false
      });
      this.setState({
        text: ''
      });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput 
          name='text'
          value={this.state.text} 
          onChange={this.handleChange} 
          placeholder='todo...' 
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}