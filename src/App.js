import React from 'react';
import ReactDOM from 'react-dom';

import TasksList from './components/TodoComponents/TasksList';
import ListForm from './components/TodoComponents/ListForm';
import './ToDo.css';

const tasks = [
  {
    task: 'Go for a jog',
    id: 123,
    completed: false
  },
  {
    task: 'Make dinner',
    id: 124,
    completed: false
  },
  {
    task: 'Go to grocery store',
    id: 1235,
    completed: false
  },
  {
    task: 'Go to gym',
    id: 1246,
    completed: false
  },
  {
    task: 'Return Emails',
    id: 1237,
    completed: false
  },
  {
    task: 'Walk cat',
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      tasksList: tasks
    };

  }

  toggleItem = clickedId => {
    
    const newTasksList = this.state.tasksList.map(item => {
     
      if (item.id === clickedId) {
        
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    
    this.setState({
      tasksList: newTasksList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasksList: [...this.state.tasksList, newItem]
    });
  };

  
          
        


  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
          <ListForm addNewItem={this.addNewItem} />
        </div>
        <TasksList
          tasks={this.state.tasksList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;