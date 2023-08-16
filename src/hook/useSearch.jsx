import { useContext } from "react"
import { AppContext } from "../state/AppContext"

export function useSearchFilter() {
  const { state } = useContext(AppContext)

  const filteredData = state?.data?.filter((e) => {
    if (state.popular && !e.popular) return false
    if (
      state.searchQuery &&
      !e.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
      !e.location.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
      return false
    return true
  })

  return { filteredData }
}
