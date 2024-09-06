import React from 'react';
import ReactDOM from 'react-dom';



function ProjectGrid(props) {
/*const pic = require("./photos/1.jpg");*/
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
     
		<img style={{width: 200, Height: 200}} src={`/photos/${props.id}.jpg `} alt='photo' />
		<div>
		<h2> {props.name} </h2>
		<p> {props.birthDate} </p>
		<p> {props.email} </p>
		</div>
	</div>
  );
}
export default ProjectGrid;
