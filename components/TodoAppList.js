import React, {Component, Fragment} from 'react'
import ListItem from './ListItem'
import { toDoService } from '../service';

export default class TodoAppList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          id: 1,
          todoName:'Angular',
          Description: 'Angular Description',
          completed: false
        },
        {
          id: 2,
          todoName:'React',
          Description: 'React Description',
          completed: true
        }
      ]
    };
  }

  componentDidMount() {
    this.subscription = toDoService.getTodo().subscribe(todo => {
  console.log(todo)
            if (todo) {
                // add message to local state if not empty
                this.setState({ todoList: [...this.state.todoList, todo] });
            } else {
                // clear messages when empty message received
                this.setState({ todoList: [] });
            }
        });
  }

  render() {
    return (
      <React.Fragment>
       <p>List of Todo's</p>       
       { this.state.todoList.length ? <ul>{this.state.todoList.map((list) => {
          return <ListItem key={list.id} item={list}/> })} </ul>: <div>Please create a todo</div>
        }
      
      </React.Fragment>
    );
  }
}
