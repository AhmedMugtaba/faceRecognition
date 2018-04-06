import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
         <Logo />
         <Rank />
         <ImgLinkForm />
      </div>
    );
  }
}

export default App;
