import React, { Component } from 'react';

const ListItem = props => {
  var arr =props.items;
return <ul>{ arr.map((item,index) => <li key ={index}>{item}</li>) } </ul>
}
  export default ListItem;
