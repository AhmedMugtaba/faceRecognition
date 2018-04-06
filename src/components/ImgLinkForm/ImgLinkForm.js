import React from 'react';

const ImgLinkForm = (props) => {
	return (
		<div>
			<p>Brain detect faces, give it a try</p>
			<div>
				<input type="text" onChange={props.onInputChange}/>
				<button onClick={props.onSumbit}>Detect</button>
			</div>
		</div>
	)
}

export default ImgLinkForm;