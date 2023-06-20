import { useState, useRef } from "react";

const users = [
	{name: 'Sarah', age: 20},
	{name: 'Alex', age: 21}, 
	{name: 'Michael', age: 28}
];

interface FoundUser {
	name: string,
	age: number
}

const UserSearch: React.FC = ()=>{
	const [name, setName] = useState(''); //Since sometimes no matching user is found, allow for undefined
	const [foundUser, setFoundUser] = useState<FoundUser | undefined>();

	const handleSearch = ()=>{
		const user = users.find(user => user.name === name)
		setFoundUser(user);
	}
	return <div>User Search
		<input value={name} onChange={e=>setName(e.target.value)}/>
		<button onClick={handleSearch}></button>
		<div>

			{/*undefined guard using && */}
			{foundUser && foundUser.name}
			{foundUser && foundUser.age}
		</div>
	</div>
}

export default UserSearch