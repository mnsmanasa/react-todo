import React,{Component, Fragment} from 'react';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state= {

    }
  }
  render() {
    return (<React.Fragment key={this.props.item.id}><li title={this.props.item.Description}>{this.props.item.todoName}
          </li></React.Fragment>)
  }
}