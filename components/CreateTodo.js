import React, {Component} from 'react';

export class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <form>
        <input type="text" name="{this.state.todoName}" placeholder="name"/>
        <input type="text" name="{this.state.description}" placeholder="description"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}