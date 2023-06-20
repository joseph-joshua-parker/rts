import { useState, useRef, useEffect } from "react";

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
					//This value will not have its value initialized until the component's
					//first render, so we have to  give it an initial value of null
					//and type it accordingly
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState(''); //Since sometimes no matching user is found, allow for undefined
	const [foundUser, setFoundUser] = useState<FoundUser | undefined>();

	useEffect(()=>{
		//Type guard to ensure useEffect code isn't executed at the wrong time
		if(!inputRef.current)	return;

		inputRef.current.focus();
	}, [])


	const handleSearch = ()=>{
		const user = users.find(user => user.name === name)
		setFoundUser(user);
	}
	return <div>User Search
		<input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
		<button onClick={handleSearch}></button>
		<div>

			{/*undefined guard using && */}
			{foundUser && foundUser.name}
			{foundUser && foundUser.age}
		</div>
	</div>
}

export default UserSearch