import React from "react";
import '../stylesheets/Contador.css';


function Contador ({ numCliks }) {
	return (
		<div className='contador'>
		{numCliks}
		</div>
	)
}

export default Contador;