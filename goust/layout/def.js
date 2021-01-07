import {Navbar} from "../components/navbar";
import {GlobalProvider} from "../providers/globalProvider";

export const Main = ({children}) => {
	return (
		<>
			<GlobalProvider>
				<Navbar/>
				<h2>pages</h2>
				<hr/>
				{children}
			</GlobalProvider>
		</>
	)
}