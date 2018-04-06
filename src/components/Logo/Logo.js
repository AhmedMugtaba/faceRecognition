import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'

const Logo = () => {
	return (
		<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 		<div className="Tilt-inner"> <img src={ brain } alt=""/> </div>
		</Tilt>
	)
}

export default Logo;