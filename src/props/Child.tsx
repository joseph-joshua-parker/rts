import { ReactNode } from "react"

//Given the following interface
interface ChildProps {
	color: string
	//In React 18 we must manually add children to the interface
	children: ReactNode;
}

					//Simple annotation
export const Child = ({color}:ChildProps)=>{
	return <div>Some</div>
}

//PROBLEM: TypeScript doesn't understand that this is specifically a REACT component, meaning
//optional props unique to React won't be accepted unless they are hard coded into the interface


					//'Proper' annotation
export const ChildAsFC: React.FC<ChildProps> = ({color, children}) =>{
	return <div>
		{color}
		{children}

	</div>
}

//ADVANTAGE: Typescript now understands that it is a React Component, and additional
//optional properties are correctly accepted without having to be manually added,
//with the exception of the children prop
