import { useContext } from "react"
import { AppContext } from "../state/AppContext"

export default function useFilter() {
  const { state, dispatch } = useContext(AppContext)

  const handleInput = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value })
  }

  const handlePopularCheck = (e) => {
    dispatch({ type: "TOGGLE", payload: e.target.checked })
  }

  const handleClear = () => {
    dispatch({ type: "CLEAR" })
  }

  return { state, handleClear, handleInput, handlePopularCheck }
}
