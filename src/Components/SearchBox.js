import React from 'react';


function SearchBox({searchfield, searchChange}){
	return(
<div className= 'tc pa2'>
<input className= 'tc pa2 ba b--green bg-lightest-blue' 
id='Search Friends'
type= 'search'
placeholder='Search Member'
onChange={searchChange} />
</div>
		);
}
export default SearchBox;