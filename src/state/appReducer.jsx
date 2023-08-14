export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_BY_TITLE":
      return { ...state, searchQuery: action.payload }
    case "TOGGLE_POPULAR":
      return { ...state, popular: action.payload }
    default:
      return state
  }
}
