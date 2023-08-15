import { data } from "../db/data.js"

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
        filteredData: data.filter((e) =>
          e.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }
    // case "TOGGLE_POPULAR":
    //   return { ...state, popular: action.payload }
    default:
      return state
  }
}
