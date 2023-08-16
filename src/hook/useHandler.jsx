import { useContext } from "react"
import { AppContext } from "../state/AppContext"

export default function useHandler() {
  const { state, dispatch } = useContext(AppContext)

  const handleInput = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value })
  }

  const handlePopularCheck = (e) => {
    dispatch({ type: "TOGGLE", payload: e.target.checked })
  }

  const handlePriceRangeChange = (e) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: e.target.value })
  }

  const handleClear = () => {
    dispatch({ type: "CLEAR" })
  }

  return {
    state,
    handleClear,
    handlePriceRangeChange,
    handleInput,
    handlePopularCheck,
  }
}
