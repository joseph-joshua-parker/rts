import React from "react";

const EventComponent : React.FC = ()=>{
						//Explicit type annotation, specific to the kind of event,
						//and its returned element
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
		console.log(event);

	return <div>
		<input onChange={handleChange}/>
	</div>
}

export default EventComponent