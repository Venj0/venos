import React, {useContext, useEffect, useReducer} from "react"
import {createContext} from "react"


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
	
	return (
		<GlobalContext.Provider
			value={{
				global: state,
				
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
