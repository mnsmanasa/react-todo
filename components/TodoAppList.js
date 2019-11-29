import React, {Component, Fragment} from 'react'

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
       <ul>
       { this.state.todoList.map((list) => {
          return (<li key="list.id">{list.todoName}<title>{list.todoDescription}</title></li>)
        })}
       </ul>
      </React.Fragment>
    );
  }
}
