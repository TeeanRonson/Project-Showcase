import React, { Component } from 'react';
import ImageAvatar from '../ImageAvatar'
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">Home</a> 
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
       </div>
    )
  }
}
export default Nav;