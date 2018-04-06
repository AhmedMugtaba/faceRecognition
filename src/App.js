import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import Rank from './components/Rank/Rank';
import FaceReco from './components/FaceReco/FaceReco';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
 apiKey: 'fb1272d2c6944f13923b43a11f619773'
});


class App extends Component {
	
	constructor(){
		super();
		this.state ={
			input: '',
			imageUrl: ''
		}
	}
	
	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}
	
	onSumbit = () => {
		this.setState = ({imageUrl: this.state.input})

		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
  	function(response) {
    // do something with response
			console.log(response)
  	},
  	function(err) {
    // there was an error
  	}
);
	}
	
  render() {
    return (
      <div className="App">
        <Navigation />
         <Logo />
         <Rank />
         <ImgLinkForm 
					onInputChange={this.onInputChange}
					onSumbit={this.onSumbit}
					/>
					<FaceReco imageUrl={this.state.input}/>
      </div>
    );
  }
}

export default App;
