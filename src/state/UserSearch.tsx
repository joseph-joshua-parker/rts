import { useState } from "react";

const Users = [
	{name: 'Sarah', age: 20},
	{name: 'Alex', age: 21}, 
	{name: 'Michael', age: 28}
];


const UserSearch: React.FC = ()=>{
	const [name, setName] = useState('');
	const handleSearch = ()=>{
		
	}
	return <div>User Search
		<input value={name} onChange={e=>setName(e.target.value)}/>
		<button onClick={handleSearch}></button>
	</div>
}

export default UserSearch