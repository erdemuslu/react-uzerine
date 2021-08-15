export default (state, action) => {
  switch (action.type) {
    case 'GET_COCKTAIL_REQUEST':
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: true
        }
      }
    case 'GET_COCKTAIL_REQUEST_SUCCESS':
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: false,
          data: action.data.drinks
        }
      }
    default:
      return state
  }
}
