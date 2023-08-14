import { createContext, useContext, useReducer } from "react"
import data from "../db/data.json"
import { reducer } from "./appReducer"

export const AppContext = createContext()

const initialState = {
  products: data,
  searchQuery: "",
  popular: false,
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for using context
export const useAppState = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppState must be used within an AppContextProvider")
  }
  const { state, dispatch } = context
  return { state, dispatch }
}
