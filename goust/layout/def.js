import {Navbar} from "../components/nabigation";

export const Main = ({children})=>{
    return (
        <div>
					<Navbar/>
            <h2>pages</h2>
            <hr/>
            {children}
        </div>
    )
}