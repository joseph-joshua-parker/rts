import { useState } from "react";

const GuestList: React.FC = ()=> {
	const [name, setName] = useState('');

	const [guests, setGuests] = useState<string[]>([]);
								//We must manually annotate state type when 
								//initializing as an empty object


	const addGuest = ()=>{
		setName('');
		setGuests([...guests, name])
	}

	return <div>
		<h3>Guest List</h3>
		<ul>
			{guests.map(guest=> <li>{guest}</li>)}
		</ul>
		
		<input value={name} onChange={(e)=>setName(e.target.value)}/>
		<button onClick={addGuest}>Add Guest</button>
	</div>
}

export default GuestList;