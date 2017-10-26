import React from 'react';



const Display = ({url, width}) => {
	return(
		url ? <img src = { url } width = { width } alt= { 'profile img' } style={{marginBottom: '1em'}}/> : <div></div>	
	);
}

export default Display;