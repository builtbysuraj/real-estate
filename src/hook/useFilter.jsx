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
      const [minPrice, maxPrice] = state.priceRange.split("-").map(Number)
      const price = Number(e.price.replace(/[^0-9.]/g, ""))
      if (price < minPrice || price > maxPrice) return false
    }
    return true
  })

  return { filteredData }
}
