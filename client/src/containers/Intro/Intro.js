import React, { Component } from 'react';
import Info from '../../info.json'
import './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("hahahaha");
    return (
      <div>
        {Info.about.map((text, i) => {
          return <p key={i}>{text}</p>
        })}
        
      </div>
    )
  }
}
export default Intro;