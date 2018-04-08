import React from 'react';
import './FaceReco.css'


const FaceReco = (props) => {
	return (
			<div>
				<img id='inputImage' src={props.imageUrl} alt="face" />
				<div className='bounding-box' style = {{top: props.box.topRow, right: props.box.rightCol, bottom: props.box.bottomRow, left: props.box.leftCol}} ></div>
			</div>
	)
}

export default FaceReco; 