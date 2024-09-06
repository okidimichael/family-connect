import React from 'react';

const Ranked = ({ name, rank }) =>{
	 
	return(
<div className = 'white f3'>
	<div>
	{`${name}, Your login Count is ...`}
	</div>
	<div>
	{rank}
	</div>	
</div>
		);

}
export default Ranked;