import React from 'react';

import Item from './Item';

const ToDoList = props => {
  // const sortedList = props.tasks.sort((a, b) => a.completed - b.completed);

  /*`.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.*/

  return (
    <div className="tasks-list">
      {props.tasks.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

      


      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TasksList;
