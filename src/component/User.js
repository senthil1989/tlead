import React, { Component } from 'react';
import ListItem from './ListItem.js'
class Users extends Component{
  constructor(props){
    super(props);
    this.state={
      term:'',
      items:[]
    }
  }

handleChange = (event) =>{
  event.preventDefault();
  this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    console.log(this.state.items);
  }
  onChange = (event) => {
      this.setState({term: event.target.value});
    }
   render(){
     console.log(this.state.name);
     return(
       <div>
        <input value={this.state.term} onChange={this.onChange} />
        <input type="submit" value="Submit" onClick={this.handleChange}/>
        <ListItem items={this.state.items} />
        </div>
     )

     }
   }
  //  Users.defaultProps={
  //    name:'tony'
  //  }
export default Users;
