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
    case "CLEAR":
      return {
        data: data,
        searchQuery: "",
        popular: false,
      }
    default:
      return state
  }
}
