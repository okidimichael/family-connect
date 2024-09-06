import React from 'react';
import ReactDOM from 'react-dom';
/*import 'tachyons';*/
function Header({ onRouteChange }) {
  return (
  
/*  	    <img alt="" src={"/Photo/pic.png"} style={{width: '200', Height: 'auto'}}/>
*/	    <nav style={{display: 'flex', justifyContent: 'flex-end', margin: '0px px 0px 0px'}}>
	    <p onClick={() =>onRouteChange('SignIn')}className='f5 pa3 link dim black underline pointer '> Sign Out </p>
	    </nav>

  );
}
export default Header;