import { useContext } from "react"
import { AppContext } from "../state/AppContext"

export function useFilter() {
  const { state } = useContext(AppContext)

  const filteredData = state?.data?.filter((e) => {
    // Toggle Popular button
    if (state.popular && !e.popular) return false

    // Searching filter
    if (
      state.searchQuery &&
      !e.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
      !e.location.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
      return false

    // Price range
    if (state.priceRange) {
      // Split the state.priceRange string into an array of two elements
      const priceRangeArray = state.priceRange.split("-")
      const minPrice = Number(priceRangeArray[0])
      const maxPrice = Number(priceRangeArray[1])
      const price = e.price
      if (price < minPrice || price > maxPrice) return false
    }
    return true
  })

  return { filteredData }
}
