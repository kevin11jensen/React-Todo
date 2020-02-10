import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/TodoComponents/GroceryList';
import ListForm from './components/TodoComponents/ListForm';
import './ToDo.css';

const tasks = [
  {
    name: 'Go for a jog',
    id: 123,
    purchased: false
  },
  {
    name: 'Make dinner',
    id: 124,
    purchased: false
  },
  {
    name: 'Go to grocery store',
    id: 1235,
    purchased: false
  },
  {
    name: 'Go to gym',
    id: 1246,
    purchased: false
  },
  {
    name: 'Return Emails',
    id: 1237,
    purchased: false
  },
  {
    name: 'Walk cat',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state

  // What we inherit from React.Component
  // this.state
  // this.setState
  // lifecycle methods
  constructor() {
    super();
    this.state = {
      tasksList: tasks
    };

    // we don't need this if we use arrow functions 🎉
    // this.toggleItem = this.toggleItem.bind(this);
  }

  // const [someData, setSomeData] = useState('')
  // const [moreData, setSomeData] = useState([])

  // THE `this` KEYWORD 👻

  // Class methods to update state
  toggleItem = clickedId => {
    // no mutating the current state
    // for every array and every object - create a new one (..., or array methods)
    const newGroceryList = this.state.tasksList.map(item => {
      // loop through the array
      // find the item we clicked (id, maybe index)
      // toggle that item's purchased property
      if (item.id === clickedId) {
        // toggle purchased
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });

    // Update state with the new array
    this.setState({
      tasksList: newGroceryList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      purchased: false
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
        <GroceryList
          groceries={this.state.tasksList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;