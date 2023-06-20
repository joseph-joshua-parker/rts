const EventComponent : React.FC = ()=>{
						//Implicit any
	const handleChange = (e)=> console.log(e);

	return <div>
		<input onChange={handleChange}/>
	</div>
}

export default EventComponent