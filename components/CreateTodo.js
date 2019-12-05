import React, {Component} from 'react';
import { toDoService } from '../service';

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

  addTodo =(event)=>{
    event.preventDefault()
    this.subscription = toDoService.addTodo(this.state.todoName,this.state.description).subscribe((name,descriptiom) => {
      console.log(this.state.todoName,this.state.toDoService)
    })
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