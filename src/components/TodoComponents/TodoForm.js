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

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <StyledInput 
        value={this.state.text} 
        onChange={this.handleChange} 
        placeholder='todo...' 
      />
    );
  }
}