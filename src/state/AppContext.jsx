import { createContext, useReducer } from "react"
import { data } from "../db/data.js"
import { reducer } from "./appReducer"

export const AppContext = createContext()

const initialState = {
  data: data,
  searchQuery: "",
  popular: false,
  priceRange: "",
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
