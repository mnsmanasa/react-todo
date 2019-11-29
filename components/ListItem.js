import React,{Component, Fragment} from 'react';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state= {
      strikeThrough: this.props.item.completed
    }
  }
  ToggleTodo=()=>{
     this.setState({strikeThrough: !this.state.strikeThrough})
  }
  render() {
    console.log(this.props)
    return (<React.Fragment key={this.props.item.id}><li title={this.props.item.Description} onClick={this.ToggleTodo} 
    style={{textDecoration: this.state.strikeThrough ? 'line-through' : 'none'}}>{this.props.item.todoName}
          </li></React.Fragment>)
  }
}