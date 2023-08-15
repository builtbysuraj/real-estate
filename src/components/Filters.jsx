import { useContext } from "react"
import { AppContext } from "../state/AppContext"

export default function Filters() {
  const { dispatch } = useContext(AppContext)
  const handleInput = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value })
  }

  return (
    <div>
      <input type="text" placeholder="Search name and location" onChange={handleInput} />
    </div>
  )
}
