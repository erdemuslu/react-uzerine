export const getCocktailRequest = () => ({
  type: 'GET_COCKTAIL_REQUEST'
})

export const getCocktailRequestSuccess = data => ({
  type: 'GET_COCKTAIL_REQUEST_SUCCESS',
  data
})
