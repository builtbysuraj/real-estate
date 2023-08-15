import { useAppState } from "../state/AppContext"

export default function useSearch() {
  const { state } = useAppState()

  const filteredData = state.data.filter((data) => {
    data.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      data.location.toLowerCase().includes(state.searchQuery.toLowerCase())
  })

  return { filteredData }
}
