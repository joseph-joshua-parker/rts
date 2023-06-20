
//Given the following interface
interface ChildProps {
	color: string
}

					//Simple annotation
export const Child = ({color}:ChildProps)=>{
	return <div>Some</div>
}

//PROBLEM: TypeScript doesn't understand that this is specifically a REACT component, meaning
//optional props unique to React won't be accepted unless they are hard coded into the interface

