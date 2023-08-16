import { data } from "../db/data"

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      }
    case "TOGGLE":
      return {
        ...state,
        popular: action.payload,
      }
    case "SET_PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      }
    case "CLEAR":
      return {
        data: data,
        searchQuery: "",
        popular: false,
        priceRange: "",
      }
    default:
      return state
  }
}
