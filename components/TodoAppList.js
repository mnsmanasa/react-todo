import React, {Component, Fragment} from 'react'
import ListItem from './ListItem'

export default class TodoAppList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          id: 1,
          todoName:'Angular',
          Description: 'Angular Description'
        },
        {
          id: 2,
          todoName:'React',
          Description: 'React Description'
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
       <p>List of Todo's</p>       
       { this.state.todoList.length ? <ul>{this.state.todoList.map((list) => {
          return <ListItem item={list}/> })} </ul>: <div>Please create a todo</div>
        }
      
      </React.Fragment>
    );
  }
}
