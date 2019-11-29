import React, {Component} from 'react';

export default class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      id: 0,
      todoName: '',
      description: '',
      completed: false
    }
  }

  addTodo=(event)=>{
    event.preventDefault()
    if(this.state.todoName !== null && this.state.description !== null) {
      console.log(event.target)
    }
  }
  handleTodoChange=(event)=>{
    this.setState({todoName: event.target.value})
  }
  handleDescriptionChange=(event)=>{
    this.setState({description: event.target.value})
  }
  render(){
    return (
      <form onSubmit={this.addTodo}>
        <input type="text" name="todoName" value={this.state.todoName} placeholder="name" onChange={this.handleTodoChange}/>
        <input type="text" name="description" value={this.state.description} placeholder="description" onChange={this.handleDescriptionChange}/>
        <button type="submit">Add</button>
      </form>
    )
  }
}