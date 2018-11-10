import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Nav from '../../components/Nav';
import Projects from '../Projects';
import Intro from '../Intro';
import ImageAvatar from '../../components/ImageAvatar'
import Info from '../../info.json'
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Nav/>
        <ImageAvatar avatar={Info.avatar}/>
        <Intro/>
        <Projects/>
      </div>
    )
  }
}
export default Home;